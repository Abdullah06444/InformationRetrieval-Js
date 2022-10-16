(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./RetrievalType", "../Document/DocumentWeighting", "../Index/TermWeighting"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchParameter = void 0;
    const RetrievalType_1 = require("./RetrievalType");
    const DocumentWeighting_1 = require("../Document/DocumentWeighting");
    const TermWeighting_1 = require("../Index/TermWeighting");
    class SearchParameter {
        constructor() {
            this.retrievalType = RetrievalType_1.RetrievalType.RANKED;
            this.documentWeighting = DocumentWeighting_1.DocumentWeighting.NO_IDF;
            this.termWeighting = TermWeighting_1.TermWeighting.NATURAL;
            this.documentsRetrieved = 1;
        }
        setRetrievalType(retrievalType) {
            this.retrievalType = retrievalType;
        }
        setDocumentWeighting(documentWeighting) {
            this.documentWeighting = documentWeighting;
        }
        setTermWeighting(termWeighting) {
            this.termWeighting = termWeighting;
        }
        setDocumentsRetrieved(documentsRetrieved) {
            this.documentsRetrieved = documentsRetrieved;
        }
        getRetrievalType() {
            return this.retrievalType;
        }
        getDocumentWeighting() {
            return this.documentWeighting;
        }
        getTermWeighting() {
            return this.termWeighting;
        }
        getDocumentsRetrieved() {
            return this.documentsRetrieved;
        }
    }
    exports.SearchParameter = SearchParameter;
});
//# sourceMappingURL=SearchParameter.js.map