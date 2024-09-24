---
title: "Benachrichtigung: Badge-Eigenschaft"
short-title: Badge
slug: Web/API/Notification/badge
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`badge`**-Eigenschaft des {{domxref("Notification")}}-Interfaces gibt einen String zurück, der die URL eines Bildes enthält, um die Benachrichtigung darzustellen, wenn nicht genug Platz vorhanden ist, um die Benachrichtigung selbst anzuzeigen, wie zum Beispiel in der Android-Benachrichtigungsleiste. Auf Android-Geräten sollte das Badge Bilder für Geräte bis zu 4-facher Auflösung unterstützen, ungefähr 96 mal 96 px, und das Bild wird automatisch maskiert.

## Wert

Ein String, der eine URL enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
