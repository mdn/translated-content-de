---
title: "Presentation: defaultRequest-Eigenschaft"
short-title: defaultRequest
slug: Web/API/Presentation/defaultRequest
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

In einem [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das **`defaultRequest`**-Attribut die [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, falls vorhanden, ansonsten `null`. In einem [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.

Wenn es durch den [controller](https://www.w3.org/TR/presentation-api/#dfn-controller) gesetzt wurde, _SOLLTE_ der Wert des `defaultRequest`-Attributs vom [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als _default presentation request_ für diesen [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) verwendet werden. Wenn das [aktive Sandboxing-Flag-Set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) des Dokumentobjekts das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, _SOLLTE_ der [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) so handeln, als ob die Standardeinstellung für diesen Browsing-Kontext nicht gesetzt ist. Wenn der [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) eine [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) im Namen dieses Browsing-Kontexts starten möchte, _MUSS_ er eine [Präsentation starten](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) unter Verwendung der [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) für den [controller](https://www.w3.org/TR/presentation-api/#dfn-controller) (als ob der Controller [`defaultRequest.start()`](/de/docs/Web/API/PresentationRequest/start) aufgerufen hätte).

Der [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _SOLLTE_ die Präsentation unter Verwendung der [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) nur dann initiieren, wenn der Benutzer durch eine Benutzerinteraktion seine Absicht dazu ausgedrückt hat. Zum Beispiel durch Klicken auf eine Schaltfläche im Browser.

> [!NOTE]
> Einige [controlling user agents](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) ermöglichen es dem Benutzer, eine standardmäßige [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu initiieren und ein [presentation display](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) mit derselben Benutzerinteraktion auszuwählen. Zum Beispiel könnte das Browser-Chrome dem Benutzer erlauben, ein Display aus einem Menü auszuwählen oder auf ein [Near Field Communications (NFC)](https://nfc-forum.org/) aktiviertes Display zu tippen. In diesem Fall, wenn der [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) beim [Starten einer Präsentation](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) um Erlaubnis bittet, könnte der Browser dieses Display als Standardauswahl anbieten oder die Geste als Erlaubnis für das Display betrachten und die Displayauswahl vollständig überspringen.

> [!NOTE]
> Wenn ein [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) die Initiierung einer [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) aus dem Browser-Chrome heraus nicht unterstützt, hat das Setzen von `defaultRequest` keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
