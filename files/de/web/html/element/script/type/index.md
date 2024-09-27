---
title: "<script>: type-Attribut"
slug: Web/HTML/Element/script/type
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Element/script)-Elements gibt den _Typ_ des durch das Element dargestellten Skripts an: ein klassisches Skript, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder einen Datenblock.

## Wert

Der Wert dieses Attributs gibt den Typ der durch das Skript dargestellten Daten an und wird einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript MIME-Typ**
  - : Dies zeigt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
    JavaScript MIME-Typen sind [in der IANA Media Types-Spezifikation aufgelistet](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
- [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
  - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird aufgeschoben.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Für Informationen zur Verwendung von `module`, siehe unseren [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
    Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für Cross-Origin-Abrufe.
- [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgeladen werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

> [!NOTE]
> In früheren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder importierten (via `src`-Attribut) Codes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
