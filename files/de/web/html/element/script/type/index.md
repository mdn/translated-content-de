---
title: "<script>: type-Attribut"
slug: Web/HTML/Element/script/type
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Element/script)-Elements gibt den _Typ_ des durch das Element dargestellten Skripts an: ein klassisches Skript, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder ein Datenblock.

## Wert

Der Wert dieses Attributs gibt den Typ der durch das Skript dargestellten Daten an und kann einen der folgenden darstellen:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind in der [IANA-Mediatypen-Spezifikation](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) aufgelistet.
- [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
  - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwicklern ermöglicht, zu steuern, wie der Browser Modulspezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird aufgeschoben.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden.
    Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für die Cross-Origin-Beschaffung.
- [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerrendert werden sollten. Dies ist Teil der {{domxref("Speculation Rules API", "", "", "nocode")}}.
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

> [!NOTE]
> In früheren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder importierten Codes (über das `src`-Attribut).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
