---
title: MimeType
slug: Web/API/MimeType
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("HTML DOM")}}

Das **`MimeType`**-Interface enthält Informationen über einen MIME-Typ, der einem bestimmten Plugin zugeordnet ist. [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) gibt ein Array mit solchen Objekten zurück.

## Instanzeigenschaften

- [`MimeType.type`](/de/docs/Web/API/MimeType/type) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den MIME-Typ des zugeordneten Plugins zurück.
- [`MimeType.description`](/de/docs/Web/API/MimeType/description) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt eine Beschreibung des zugeordneten Plugins zurück oder einen leeren String, falls keine vorhanden ist.
- [`MimeType.suffixes`](/de/docs/Web/API/MimeType/suffixes) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein String mit gültigen Dateiendungen für die vom Plugin angezeigten Daten oder ein leerer String, wenn für das betreffende Modul keine Dateiendung gültig ist. Beispielsweise kann ein Modul eines Browsers zur Entschlüsselung von Inhalten in der Plugin-Liste erscheinen, aber mehr Dateiendungen unterstützen, als sich im Voraus bestimmen lassen. Es kann daher einen leeren String zurückgeben.
- [`MimeType.enabledPlugin`](/de/docs/Web/API/MimeType/enabledPlugin) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt eine Instanz von [`Plugin`](/de/docs/Web/API/Plugin) zurück, die Informationen über das Plugin selbst enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
