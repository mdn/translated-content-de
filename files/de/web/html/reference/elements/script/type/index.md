---
title: "`<script type>` HTML-Attribut"
short-title: <script type>
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements gibt den _Typ_ des Skripts an, das durch das Element dargestellt wird: ein klassisches Skript, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder ein Datenblock.

## Wert

Der Wert dieses Attributs zeigt den Typ der Daten an, die das Skript darstellt, und wird einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren werden ermutigt, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind in der [Liste der von IANA spezifizierten Medientypen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgeführt.
- [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird verzögert.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Für Informationen zur Verwendung von `module`, siehe unseren [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
    Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für das Abrufen aus einer anderen Quelle.
- [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

> [!NOTE]
> In älteren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder (über das `src`-Attribut) importierten Codes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
