import { TermDictionary } from "../Index/TermDictionary";
import { NGramIndex } from "../Index/NGramIndex";
import { WordComparator } from "nlptoolkit-dictionary/dist/Dictionary/WordComparator";
import { Parameter } from "./Parameter";
import { TermType } from "../Index/TermType";
import { TermOccurrence } from "../Index/TermOccurrence";
import { Query } from "../Query/Query";
import { RetrievalType } from "../Query/RetrievalType";
import { TermWeighting } from "../Index/TermWeighting";
import { DocumentWeighting } from "./DocumentWeighting";
import { QueryResult } from "../Query/QueryResult";
export declare class Collection {
    private readonly indexType;
    private dictionary;
    private phraseDictionary;
    private biGramDictionary;
    private triGramDictionary;
    private documents;
    private incidenceMatrix;
    private invertedIndex;
    private biGramIndex;
    private triGramIndex;
    private positionalIndex;
    private phraseIndex;
    private phrasePositionalIndex;
    private readonly comparator;
    private readonly name;
    private parameter;
    constructor(directory: string, parameter: Parameter);
    size(): number;
    vocabularySize(): number;
    save(): void;
    constructDictionaryInDisk(): void;
    constructIndexesInDisk(): void;
    constructIndexesInMemory(): void;
    termComparator: (comparator: WordComparator) => (termA: TermOccurrence, termB: TermOccurrence) => number;
    constructTerms(termType: TermType): Array<TermOccurrence>;
    constructDistinctWordList(termType: TermType): Set<string>;
    notCombinedAllIndexes(currentIdList: Array<number>): boolean;
    notCombinedAllDictionaries(currentWords: Array<string>): boolean;
    selectIndexesWithMinimumTermIds(currentIdList: Array<number>): Array<number>;
    selectDictionariesWithMinimumWords(currentWords: Array<string>): Array<number>;
    hashCode(s: string): number;
    addNGramsToDictionaryAndIndex(line: string, k: number, nGramDictionary: TermDictionary, nGramIndex: NGramIndex): void;
    getLine(filesData: Array<Array<string>>, files: Array<number>, index: number): string;
    getLines(filesData: Array<Array<string>>, files: Array<number>, index: number, lineCount: number): string[];
    combineMultipleDictionariesInDisk(name: string, tmpName: string, blockCount: number): void;
    combineMultipleInvertedIndexesInDisk(name: string, tmpName: string, blockCount: number): void;
    combineMultiplePositionalIndexesInDisk(name: string, blockCount: number): void;
    constructNGramDictionaryAndIndexInDisk(): void;
    constructInvertedIndexInDisk(dictionary: TermDictionary, termType: TermType): void;
    constructDictionaryAndInvertedIndexInDisk(termType: TermType): void;
    constructDictionaryAndPositionalIndexInDisk(termType: TermType): void;
    constructPositionalIndexInDisk(dictionary: TermDictionary, termType: TermType): void;
    constructNGramIndex(): void;
    searchCollection(query: Query, retrievalType: RetrievalType, termWeighting?: TermWeighting, documentWeighting?: DocumentWeighting): QueryResult;
}
