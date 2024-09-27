---
title: MimeType
slug: Web/API/MimeType
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`MimeType`**-Schnittstelle enthält Informationen über einen MIME-Typ, der einem bestimmten Plugin zugeordnet ist. [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) gibt ein Array dieses Objekts zurück.

## Instanz-Eigenschaften

- [`MimeType.type`](/de/docs/Web/API/MimeType/type) {{Deprecated_Inline}}
  - : Gibt den MIME-Typ des zugehörigen Plugins zurück.
- [`MimeType.description`](/de/docs/Web/API/MimeType/description) {{Deprecated_Inline}}
  - : Gibt eine Beschreibung des zugehörigen Plugins oder einen leeren String zurück, falls keine vorhanden ist.
- [`MimeType.suffixes`](/de/docs/Web/API/MimeType/suffixes) {{Deprecated_Inline}}
  - : Ein String, der gültige Dateierweiterungen für die vom Plugin angezeigten Daten enthält, oder ein leerer String, wenn eine Erweiterung für das Modul nicht gültig ist. Beispielsweise kann ein Inhaltsentschlüsselungsmodul eines Browsers in der Plugin-Liste erscheinen, aber mehr Dateierweiterungen unterstützen, als erwartet werden können. Daher könnte es einen leeren String zurückgeben.
- [`MimeType.enabledPlugin`](/de/docs/Web/API/MimeType/enabledPlugin) {{Deprecated_Inline}}
  - : Gibt eine Instanz von [`Plugin`](/de/docs/Web/API/Plugin) zurück, die Informationen über das Plugin selbst enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
