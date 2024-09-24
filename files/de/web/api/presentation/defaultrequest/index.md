---
title: "Präsentation: Eigenschaft defaultRequest"
short-title: defaultRequest
slug: Web/API/Presentation/defaultRequest
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

In einem [steuernden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das Attribut **`defaultRequest`** die [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, falls vorhanden, andernfalls `null`. In einem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.

Falls durch den [Kontroller](https://www.w3.org/TR/presentation-api/#dfn-controller) festgelegt, _SOLLTE_ der Wert des `defaultRequest`-Attributs vom [steuernden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als _Standard-Präsentationsanfrage_ für diesen [steuernden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) verwendet werden. Wenn das [aktive Sandbox-Flag-Set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) des Dokumentobjekts die [gecaspte Präsentations-Browsing-Kontext-Flagge](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, _SOLLTE_ der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) so handeln, als ob die Standardanfrage für diesen Browsing-Kontext nicht gesetzt ist. Wenn der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) eine {{DOMxRef("PresentationConnection")}} im Namen dieses Browsing-Kontexts initiieren möchte, _MUSS_ er eine [Präsentation starten](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) unter Verwendung der [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) für den [Kontroller](https://www.w3.org/TR/presentation-api/#dfn-controller) (so, als ob der Kontroller {{DOMxRef("PresentationRequest.start","defaultRequest.start()")}} aufgerufen hätte).

Der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _SOLLTE_ die Präsentation nur mit der [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) initiieren, wenn der Benutzer dies durch eine Benutzergeste ausgedrückt hat. Beispielsweise, indem er auf einen Button im Browser klickt.

> [!NOTE]
> Manche [steuernde Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) erlauben es dem Benutzer, eine Standard-[Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu initiieren und ein [Präsentationsdisplay](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) mit derselben Benutzergeste auszuwählen. Beispielsweise könnte der Browser-Chrome es dem Benutzer ermöglichen, ein Display aus einem Menü auszuwählen oder mit einem [Near Field Communications (NFC)](https://nfc-forum.org/)-fähigen Display zu tippen. In diesem Fall könnte der Browser beim Anfordern der Erlaubnis während des [Starts einer Präsentation](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) dieses Display als Standardauswahl anbieten oder die Geste als Erlaubnis für das Display betrachten und die Display-Auswahl vollständig überspringen.

> [!NOTE]
> Wenn ein [steuernder Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) die Initiierung einer [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) von der Browser-Chrome nicht unterstützt, hat das Setzen von `defaultRequest` keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
