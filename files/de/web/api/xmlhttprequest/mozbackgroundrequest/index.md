---
title: "XMLHttpRequest: Eigenschaft mozBackgroundRequest"
short-title: mozBackgroundRequest
slug: Web/API/XMLHttpRequest/mozBackgroundRequest
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

> [!NOTE]
> Diese Methode ist aus Webinhalten nicht verfügbar. Zugang erfordert erhöhte Berechtigungen.

**`XMLHttpRequest.mozBackgroundRequest`** ist ein Boolean, der anzeigt, ob das Objekt eine Hintergrunddienstanfrage darstellt. Wenn `true`, ist keine Ladegruppe mit der Anfrage verbunden, und Sicherheitsdialoge werden daran gehindert, dem Benutzer angezeigt zu werden.

In Fällen, in denen normalerweise ein Sicherheitsdialog (wie eine Authentifizierung oder eine Benachrichtigung über ein ungültiges Zertifikat) angezeigt würde, schlägt diese Anfrage stattdessen fehl.

> [!NOTE]
> Diese Eigenschaft muss gesetzt werden, bevor `open()` aufgerufen wird.
