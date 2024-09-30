---
title: URL Fragment Text Directives
slug: Web/API/URL_Fragment_Text_Directives
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{DefaultAPISidebar("URL Fragment Text Directives")}}

Die **URL Fragment Text Directives** API ermöglicht es Webanwendungen, mit _Textfragmenten_ im URL zu interagieren. [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) ermöglichen es, direkt auf einen bestimmten Textabschnitt in einem Webdokument zu verlinken, ohne dass der Autor ihn mit einer ID versehen muss, indem eine bestimmte Syntax im URL-Fragment verwendet wird.

## Schnittstellen

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein (derzeit) leeres Objekt.
    Das Vorhandensein eines Objekts dieses Typs in [`document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) wird zur Feature-Erkennung verwendet.

## Erweiterungen zu anderen Schnittstellen

- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Eine Eigenschaft, die ein `FragmentDirective`-Objekt für das aktuelle Dokument zurückgibt. Derzeit nur zur Feature-Erkennung verwendet.

## CSS-Selektoren

- {{cssxref("::target-text")}}
  - : Repräsentiert den Text, zu dem gescrollt wurde. Es ermöglicht Autoren, auszuwählen, wie dieser Abschnitt des Textes hervorgehoben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [URI-Fragment](/de/docs/Web/URI/Fragment)
