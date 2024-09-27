---
title: "XMLHttpRequest: mozBackgroundRequest-Eigenschaft"
short-title: mozBackgroundRequest
slug: Web/API/XMLHttpRequest/mozBackgroundRequest
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

> [!NOTE]
> Diese Methode ist von Web-Inhalten aus nicht verfügbar. Sie erfordert erhöhte Berechtigungen zum Zugriff.

**`XMLHttpRequest.mozBackgroundRequest`** ist ein Boolean, der angibt, ob das Objekt einen Hintergrunddienst-Anfrage darstellt. Wenn `true`, ist keine Ladegruppe mit der Anfrage verbunden, und Sicherheitsdialoge werden dem Benutzer nicht angezeigt.

In Fällen, in denen normalerweise ein Sicherheitsdialog (wie zum Beispiel eine Authentifizierung oder eine Benachrichtigung über ein ungültiges Zertifikat) angezeigt werden würde, schlägt diese Anfrage stattdessen fehl.

> [!NOTE]
> Diese Eigenschaft muss gesetzt werden, bevor `open()` aufgerufen wird.
