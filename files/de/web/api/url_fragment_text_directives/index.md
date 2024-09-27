---
title: URL Fragment Text Directives
slug: Web/API/URL_Fragment_Text_Directives
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{DefaultAPISidebar("URL Fragment Text Directives")}}

Die **URL-Fragment-Textdirektiven** API ermöglicht es Webanwendungen, mit _Textfragmenten_ in der URL zu interagieren. [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) erlauben es, direkt auf einen bestimmten Textabschnitt in einem Webdokument zu verlinken, ohne dass der Autor ihn mit einer ID annotieren muss, indem eine spezielle Syntax im URL-Fragment verwendet wird.

## Schnittstellen

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein (derzeit) leeres Objekt.
    Das Vorhandensein eines Objekts dieses Typs in [`document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) wird zur Funktionsüberprüfung verwendet.

## Erweiterungen zu anderen Schnittstellen

- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Eine Eigenschaft, die ein `FragmentDirective`-Objekt für das aktuelle Dokument zurückgibt. Derzeit nur für die Funktionsüberprüfung verwendet.

## CSS-Selektoren

- {{cssxref("::target-text")}}
  - : Repräsentiert den Text, zu dem gescrollt wurde. Es erlaubt den Autoren, auszuwählen, wie sie diesen Textabschnitt hervorheben möchten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [URI-Fragment](/de/docs/Web/URI/Fragment)
