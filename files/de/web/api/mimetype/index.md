---
title: MimeType
slug: Web/API/MimeType
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Das **`MimeType`** Interface enthält Informationen über einen MIME-Typ, der mit einem bestimmten Plugin verbunden ist. [`Navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) gibt ein Array dieses Objekts zurück.

## Instanzeigenschaften

- [`MimeType.type`](/de/docs/Web/API/MimeType/type) {{Deprecated_Inline}}
  - : Gibt den MIME-Typ des zugehörigen Plugins zurück.
- [`MimeType.description`](/de/docs/Web/API/MimeType/description) {{Deprecated_Inline}}
  - : Gibt eine Beschreibung des zugehörigen Plugins zurück oder einen leeren String, wenn keine vorhanden ist.
- [`MimeType.suffixes`](/de/docs/Web/API/MimeType/suffixes) {{Deprecated_Inline}}
  - : Ein String, der gültige Dateierweiterungen für die Daten enthält, die vom Plugin angezeigt werden, oder ein leerer String, wenn eine Erweiterung für das betreffende Modul nicht gültig ist. Beispielsweise kann ein Inhaltsentschlüsselungsmodul eines Browsers in der Plugin-Liste erscheinen, aber mehr Dateierweiterungen unterstützen, als vorhergesehen werden können. Es könnte daher einen leeren String zurückgeben.
- [`MimeType.enabledPlugin`](/de/docs/Web/API/MimeType/enabledPlugin) {{Deprecated_Inline}}
  - : Gibt eine Instanz von [`Plugin`](/de/docs/Web/API/Plugin) zurück, die Informationen über das Plugin selbst enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
