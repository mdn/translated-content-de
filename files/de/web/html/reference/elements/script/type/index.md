---
title: HTML-Attribut `<script type>`
short-title: <script type>
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Das Attribut **`type`** des Elements [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) gibt den _Typ_ des Skripts an, das das Element repräsentiert: ein klassisches Skript, eine Import-Map, ein JavaScript-Modul, Speculation Rules oder einen Datenblock.

## Wert

Der Wert dieses Attributs gibt an, welchen Datentyp das Skript repräsentiert. Er kann einer der folgenden sein:

- **Attribut nicht gesetzt (Standard), eine leere Zeichenfolge oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass das Skript ein „klassisches Skript“ mit JavaScript-Code ist.
    Wenn das Skript JavaScript-Code enthält, wird empfohlen, das Attribut wegzulassen, statt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind in der [IANA-Spezifikation für Medientypen aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
- [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : Dieser Wert gibt an, dass der Inhalt des Elements eine Import-Map enthält.
    Die Import-Map ist ein JSON-Objekt, mit dem Entwickler steuern können, wie der Browser Modulbezeichner beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird aufgeschoben.
    Die Attribute `charset` und `defer` haben keine Auswirkung.
    Informationen zur Verwendung von `module` finden Sie in unserem Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
    Anders als klassische Skripte erfordern Modulskripte beim Abrufen über verschiedene Origins hinweg das CORS-Protokoll.
- [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert gibt an, dass der Inhalt des Elements Speculation Rules enthält.
    Speculation Rules liegen als JSON-Objekt vor, das festlegt, welche Ressourcen der Browser vorab abrufen oder vorrendern soll. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
    Entwickler müssen Datenblöcke mit einem gültigen MIME-Typ kennzeichnen, der kein JavaScript-MIME-Typ ist.
    Alle anderen Attribute werden ignoriert, einschließlich des Attributs `src`.

> [!NOTE]
> In älteren Browsern gab der Typ die Skriptsprache des eingebetteten oder über das Attribut `src` importierten Codes an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
