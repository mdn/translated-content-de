---
title: HTML-Attribut `<script type>`
short-title: <script type>
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Das Attribut **`type`** des Elements [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) gibt den _Typ_ des Skripts an, das das Element repräsentiert: ein klassisches Skript, eine Importmap, ein JavaScript-Modul, Spekulationsregeln oder einen Datenblock.

## Wert

Der Wert dieses Attributs gibt den Typ der Daten an, die das Skript repräsentiert. Er kann einer der folgenden Werte sein:

- **Attribut nicht gesetzt (Standard), eine leere Zeichenfolge oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass es sich um ein „klassisches Skript“ mit JavaScript-Code handelt.
    Wenn das Skript JavaScript-Code enthält, wird empfohlen, das Attribut wegzulassen, statt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind in der [IANA-Spezifikation für Medientypen aufgeführt](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript).
- [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : Dieser Wert gibt an, dass der Inhalt des Elements eine Importmap enthält.
    Die Importmap ist ein JSON-Objekt, mit dem Entwickler steuern können, wie der Browser Modulbezeichner beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert bewirkt, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird aufgeschoben.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Informationen zur Verwendung von `module` finden Sie in unserem [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules).
    Anders als klassische Skripte erfordern Modulskripte für das Abrufen über verschiedene Origins hinweg das CORS-Protokoll.
- [`speculationrules`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
  - : Dieser Wert gibt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln liegen als JSON-Objekt vor, das festlegt, welche Ressourcen der Browser vorab laden oder vorab rendern soll. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
- **Jeder andere Wert**
  - : Der eingebettete Inhalt wird als Datenblock behandelt und vom Browser nicht verarbeitet.
    Entwickler müssen zur Kennzeichnung von Datenblöcken einen gültigen MIME-Typ verwenden, der kein JavaScript-MIME-Typ ist.
    Alle anderen Attribute werden ignoriert, einschließlich des Attributs `src`.

> [!NOTE]
> In älteren Browsern gab der Typ die Skriptsprache des eingebetteten oder über das Attribut `src` importierten Codes an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
