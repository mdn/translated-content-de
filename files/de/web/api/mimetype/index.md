---
title: MimeType
slug: Web/API/MimeType
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`MimeType`**-Schnittstelle enthält Informationen über einen MIME-Typ, der mit einem bestimmten Plugin verknüpft ist. {{domxref("Navigator.mimeTypes")}} gibt ein Array dieses Objekts zurück.

## Instanz-Eigenschaften

- {{domxref("MimeType.type")}} {{Deprecated_Inline}}
  - : Gibt den MIME-Typ des zugehörigen Plugins zurück.
- {{domxref("MimeType.description")}} {{Deprecated_Inline}}
  - : Gibt eine Beschreibung des zugehörigen Plugins oder einen leeren String zurück, wenn keine vorhanden ist.
- {{domxref("MimeType.suffixes")}} {{Deprecated_Inline}}
  - : Ein String, der gültige Dateiendungen für die vom Plugin angezeigten Daten enthält, oder ein leerer String, wenn eine Endung für das bestimmte Modul nicht gültig ist. Zum Beispiel kann ein Inhaltsentschlüsselungsmodul eines Browsers in der Plugin-Liste erscheinen, aber mehr Dateiendungen unterstützen, als vorhergesehen werden können. Es könnte daher einen leeren String zurückgeben.
- {{domxref("MimeType.enabledPlugin")}} {{Deprecated_Inline}}
  - : Gibt eine Instanz von {{domxref("Plugin")}} zurück, die Informationen über das Plugin selbst enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
