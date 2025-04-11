---
title: "<script>: type-Attribut"
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements gibt den _Typ_ des Scripts an, das durch das Element dargestellt wird: ein klassisches Script, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder ein Datenblock.

## Wert

Der Wert dieses Attributs gibt den Datentyp an, der durch das Script dargestellt wird, und kann einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Zeigt an, dass das Script ein "klassisches Script" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn sich das Script auf JavaScript-Code bezieht, anstatt einen MIME-Typ zu spezifizieren.
    JavaScript-MIME-Typen sind in der [IANA-Mediatypen-Spezifikation](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgeführt.
- [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : Dieser Wert gibt an, dass der Body des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modul-Spezifizierer beim Import von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Script-Inhalts wird aufgeschoben.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Weitere Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
    Im Gegensatz zu klassischen Scripts erfordern Modul-Scripts die Verwendung des CORS-Protokolls für das Abrufen aus einer anderen Herkunft.
- [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Body des Elements Spekulationsregeln enthält.
    Spekulationsregeln liegen in Form eines JSON-Objekts vor, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

> [!NOTE]
> In älteren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder importierten (über das `src`-Attribut) Codes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
