---
title: URL-Fragment-Textanweisungen
slug: Web/API/URL_Fragment_Text_Directives
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{DefaultAPISidebar("URL Fragment Text Directives")}}

Die **API für URL-Fragment-Textanweisungen** ermöglicht es Webanwendungen, mit _Textfragmenten_ in der URL zu interagieren. [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) erlauben es, direkt auf einen bestimmten Abschnitt eines Textes in einem Webdokument zu verlinken, ohne dass der Autor diesen mit einer ID versehen muss. Dies erfolgt durch eine spezielle Syntax im URL-Fragment.

## Schnittstellen

- {{domxref("FragmentDirective")}}
  - : Ein (derzeit) leeres Objekt.
    Das Vorhandensein eines Objekts dieses Typs in {{domxref("document.fragmentDirective")}} wird zur Feature-Erkennung verwendet.

## Erweiterungen anderer Schnittstellen

- {{domxref("Document.fragmentDirective")}}
  - : Eine Eigenschaft, die ein `FragmentDirective`-Objekt für das aktuelle Dokument zurückgibt. Derzeit nur zur Feature-Erkennung verwendet.

## CSS-Selektoren

- {{cssxref("::target-text")}}
  - : Repräsentiert den Text, zu dem gescrollt wurde. Es ermöglicht es den Autoren, zu wählen, wie dieser Textabschnitt hervorgehoben werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [URI-Fragment](/de/docs/Web/URI/Fragment)
