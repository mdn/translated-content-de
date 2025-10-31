---
title: "Präsentation: defaultRequest-Eigenschaft"
short-title: defaultRequest
slug: Web/API/Presentation/defaultRequest
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

In einem [steuernden Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _MUSS_ das **`defaultRequest`**-Attribut die [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) zurückgeben, falls vorhanden, andernfalls `null`. In einem [empfangenden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) _MUSS_ es `null` zurückgeben.

Wenn es vom [Kontroller](https://www.w3.org/TR/presentation-api/#dfn-controller) gesetzt wird, _SOLLTE_ der Wert des `defaultRequest`-Attributs vom [steuernden Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) als die _Standard-Präsentationsanfrage_ für diesen [steuernden Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context) verwendet werden. Wenn das [aktive Sandboxing-Flagset des Dokuments](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) das [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) gesetzt hat, _SOLLTE_ der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) so handeln, als ob die Standardanfrage für diesen Browsing-Kontext nicht gesetzt ist. Wenn der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) eine [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) im Namen dieses Browsing-Kontexts initiieren möchte, _MUSS_ er [eine Präsentation starten](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) unter Verwendung der [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) für den [Kontroller](https://www.w3.org/TR/presentation-api/#dfn-controller) (als ob der Kontroller [`defaultRequest.start()`](/de/docs/Web/API/PresentationRequest/start) aufgerufen hätte).

Der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _SOLLTE_ die Präsentation unter Nutzung der [Standard-Präsentationsanfrage](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) nur initiieren, wenn der Benutzer dies durch eine Benutzeraktion ausgedrückt hat. Zum Beispiel durch Klicken auf eine Schaltfläche im Browser.

> [!NOTE]
> Einige [steuernde Benutzeragenten](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) könnten dem Benutzer erlauben, eine Standard-[Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu initiieren und ein [Präsentationsdisplay](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) mit derselben Benutzeraktion auszuwählen. Zum Beispiel könnte die Browser-Oberfläche dem Benutzer erlauben, ein Display aus einem Menü auszuwählen oder auf ein [NFC](https://nfc-forum.org/)-fähiges Display zu tippen. In diesem Fall, wenn der [steuernde Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) um Erlaubnis bittet, während er [eine Präsentation startet](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation), könnte der Browser dieses Display als Standardwahl anbieten oder die Aktion als Erlaubnis für das Display interpretieren und die Display-Auswahl vollständig umgehen.

> [!NOTE]
> Wenn ein [steuernder Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) die Initiierung einer [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) aus der Browser-Oberfläche nicht unterstützt, wird das Setzen von `defaultRequest` keine Wirkung haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
