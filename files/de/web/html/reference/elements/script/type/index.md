---
title: <script> type-Attribut
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Elements gibt den _Typ_ des durch das Element dargestellten Skripts an: ein klassisches Skript, eine Importmap, ein JavaScript-Modul, Spekulationsregeln oder einen Datenblock.

## Wert

Der Wert dieses Attributs gibt den Typ der durch das Skript dargestellten Daten an und wird einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Bedeutet, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn sich das Skript auf JavaScript-Code bezieht, anstatt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind [in der IANA-Medientypen-Spezifikation aufgelistet](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
- [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importmap enthält.
    Die Importmap ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modulspezifikatoren beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird aufgeschoben.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Für Informationen zur Verwendung von `module` siehe unseren [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
    Im Gegensatz zu klassischen Skripten erfordern Modulscripte die Verwendung des CORS-Protokolls für das Laden von Ressourcen aus anderen Ursprüngen.
- [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorgeladen oder vorgerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und nicht vom Browser verarbeitet.
    Entwickler müssen einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist, um Datenblöcke zu kennzeichnen.
    Alle anderen Attribute werden ignoriert, einschließlich des `src`-Attributs.

> [!NOTE]
> In früheren Browsern identifizierte der Typ die Skriptsprache des eingebetteten oder importierten Codes (über das `src`-Attribut).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
