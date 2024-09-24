---
title: "<script>: type-Attribut"
slug: Web/HTML/Element/script/type
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTMLSidebar}}

Das **`type`**-Attribut des [`<script>`](/de/docs/Web/HTML/Element/script)-Elements gibt den _Typ_ des durch das Element dargestellten Skripts an: ein klassisches Skript, eine Importkarte, ein JavaScript-Modul, Spekulationsregeln oder einen Datenblock.

## Wert

Der Wert dieses Attributs gibt den Typ der durch das Skript dargestellten Daten an und kann einer der folgenden sein:

- **Attribut ist nicht gesetzt (Standard), ein leerer String oder ein JavaScript-MIME-Typ**
  - : Gibt an, dass das Skript ein "klassisches Skript" ist, das JavaScript-Code enthält.
    Autoren wird empfohlen, das Attribut wegzulassen, wenn das Skript auf JavaScript-Code verweist, anstatt einen MIME-Typ anzugeben.
    JavaScript-MIME-Typen sind in der [IANA-Medientypen-Spezifikation](/de/docs/Web/HTTP/MIME_types#textjavascript) aufgeführt.
- [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap)
  - : Dieser Wert zeigt an, dass der Inhalt des Elements eine Importkarte enthält.
    Die Importkarte ist ein JSON-Objekt, das Entwickler verwenden können, um zu steuern, wie der Browser Modul-Spezifizierer beim Importieren von [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) auflöst.
- `module`
  - : Dieser Wert führt dazu, dass der Code als JavaScript-Modul behandelt wird.
    Die Verarbeitung des Skriptinhalts wird verzögert.
    Die Attribute `charset` und `defer` haben keine Wirkung.
    Informationen zur Verwendung von `module` finden Sie in unserem [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)-Leitfaden.
    Im Gegensatz zu klassischen Skripten erfordern Modulskripte die Verwendung des CORS-Protokolls für das Abrufen über mehrere Ursprünge.
- [`speculationrules`](/de/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : Dieser Wert zeigt an, dass der Inhalt des Elements Spekulationsregeln enthält.
    Spekulationsregeln nehmen die Form eines JSON-Objekts an, das bestimmt, welche Ressourcen vom Browser vorab geladen oder vorab gerendert werden sollen. Dies ist Teil der [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).
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
