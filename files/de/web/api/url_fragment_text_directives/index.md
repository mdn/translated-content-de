---
title: URL Fragment Text Directives
slug: Web/API/URL_Fragment_Text_Directives
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{DefaultAPISidebar("URL Fragment Text Directives")}}

Die **API der URL-Fragment-Text-Direktiven** ermöglicht es Webanwendungen, mit _Textfragmenten_ in der URL zu interagieren. [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) erlauben das Verlinken direkt zu einem bestimmten Textabschnitt in einem Webdokument, ohne dass der Autor den Text mit einer ID versehen muss. Dies wird durch eine bestimmte Syntax im URL-Fragment erreicht.

## Schnittstellen

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein (derzeit) leeres Objekt.
    Die Existenz eines Objekts dieses Typs in [`document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) wird zur Funktionsüberprüfung verwendet.

## Erweiterungen zu anderen Schnittstellen

- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Eine Eigenschaft, die ein `FragmentDirective`-Objekt für das aktuelle Dokument zurückgibt. Derzeit wird dies nur zur Funktionsüberprüfung verwendet.

## CSS-Selektoren

- {{cssxref("::target-text")}}
  - : Repräsentiert den Text, zu dem gescrollt wurde. Es ermöglicht den Autoren, festzulegen, wie dieser Textabschnitt hervorgehoben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [URI-Fragment](/de/docs/Web/URI/Reference/Fragment)
