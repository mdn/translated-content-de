---
title: "Presentation: defaultRequest Eigenschaft"
short-title: defaultRequest
slug: Web/API/Presentation/defaultRequest
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

In einem [steuernden Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das Attribut **`defaultRequest`** die [Standard-Präsentationsanforderung](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, falls vorhanden, andernfalls `null`. In einem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.

Wenn es vom [Steuergerät](https://www.w3.org/TR/presentation-api/#dfn-controller) gesetzt wird, _SOLLTE_ der Wert des `defaultRequest`-Attributs vom [steuernden Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als _Standard-Präsentationsanforderung_ für diesen [steuernden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) verwendet werden. Wenn das aktive [Sandbox-Flag-Set des Dokumentobjekts](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) das [Sandbox-Präsentations-Browsing-Kontext-Flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, _SOLLTE_ der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) so tun, als wäre die Standardanfrage für diesen Browsing-Kontext nicht gesetzt. Wenn der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) eine [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) im Namen dieses Browsing-Kontexts initiieren möchte, _MUSS_ er eine [Präsentation starten](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) mit der [Standard-Präsentationsanforderung](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) für den [Steuerer](https://www.w3.org/TR/presentation-api/#dfn-controller) (als ob der Steuerer [`defaultRequest.start()`](/de/docs/Web/API/PresentationRequest/start) aufgerufen hätte).

Der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _SOLLTE_ die Präsentation mit der [Standard-Präsentationsanforderung](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) nur dann initiieren, wenn der Benutzer die Absicht dazu durch eine Benutzeraktion ausgedrückt hat. Beispielsweise durch Klicken auf eine Schaltfläche im Browser.

> [!NOTE]
> Einige [steuernde Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) können dem Benutzer erlauben, eine Standard-[Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu initiieren und ein [Präsentationsdisplay](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) mit der gleichen Benutzeraktion auszuwählen. Zum Beispiel könnte der Browser-Chrome dem Benutzer erlauben, ein Display aus einem Menü auszuwählen, oder der Benutzer könnte auf ein [Near Field Communications (NFC)](https://nfc-forum.org/)-fähiges Display tippen. In diesem Fall, wenn der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) um Erlaubnis bittet, während er eine [Präsentation startet](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation), könnte der Browser dieses Display als Standardwahl anbieten oder die Geste als Erlaubnis für das Display betrachten und die Displayauswahl vollständig umgehen.

> [!NOTE]
> Wenn ein [steuernder Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) die Initiierung einer [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) aus dem Browser-Chrome heraus nicht unterstützt, wird das Setzen von `defaultRequest` keine Wirkung haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
