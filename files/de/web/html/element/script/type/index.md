---
title: "<script>: type-Attribut"
slug: Web/HTML/Element/script/type
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Element/script)-Elements gibt den _Typ_ des Scripts an, das durch das Element repräsentiert wird: ein klassisches Skript, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder ein Datenblock.

## Wert

Der Wert dieses Attributs zeigt den Typ der durch das Script repräsentierten Daten an und wird einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Zeigt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript sich auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgelistet](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
- [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
  - : Dieser Wert zeigt an, dass der Inhalt des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren auflöst, wenn [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert werden.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird verschoben.
    Die Attribute `charset` und `defer` haben keine Auswirkung.
    Für Informationen zur Verwendung von `module`, siehe unseren [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
    Im Gegensatz zu klassischen Skripten erfordern Modulscripts die Verwendung des CORS-Protokolls für das Abrufen von Ressourcen aus anderen Ursprüngen.
- [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollten. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der nicht ein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributes.

> [!NOTE]
> In früheren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder (über das `src`-Attribut) importierten Codes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
