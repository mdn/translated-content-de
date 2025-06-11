---
title: <script> type-Attribut
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements gibt den _Typ_ des Skripts an, der durch das Element repräsentiert wird: ein klassisches Skript, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder ein Datenblock.

## Wert

Der Wert dieses Attributs gibt den Typ der durch das Skript repräsentierten Daten an und wird einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind in der [IANA-Medientypen-Spezifikation](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) aufgelistet.
- [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : Dieser Wert gibt an, dass der Körper des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifizierer auflöst, wenn er [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) importiert.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird aufgeschoben.
    Die `charset`- und `defer`-Attribute haben keine Wirkung.
    Für Informationen zur Verwendung von `module`, siehe unseren [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
    Im Unterschied zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für das Abrufen über verschiedene Ursprünge hinweg.
- [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Körper des Elements Spekulationsregeln enthält.
    Spekulationsregeln haben die Form eines JSON-Objekts, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

> [!NOTE]
> In früheren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder importierten (über das `src`-Attribut) Codes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
