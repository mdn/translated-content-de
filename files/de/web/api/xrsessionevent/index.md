---
title: XRSessionEvent
slug: Web/API/XRSessionEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRSessionEvent`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt ein Ereignis, das die Änderung des Zustands einer {{domxref("XRSession")}} anzeigt. Diese Ereignisse treten beispielsweise auf, wenn die Sitzung endet oder sich die Sichtbarkeit ihres Kontexts ändert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("XRSessionEvent.XRSessionEvent", "XRSessionEvent()")}}
  - : Erstellt und gibt ein neues `XRSessionEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Neben den von der übergeordneten Schnittstelle {{domxref("Event")}} geerbten Eigenschaften bietet `XRSessionEvent` die folgenden:_

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : Die {{domxref("XRSession")}}, auf die sich das Ereignis bezieht.

## Instanz-Methoden

_Obwohl `XRSessionEvent` keine Methoden definiert, erbt sie Methoden von ihrer übergeordneten Schnittstelle, {{domxref("Event")}}._

## Sitzungsereignistypen

_Die folgenden Ereignisse werden über die `XRSessionEvent`-Schnittstelle dargestellt und sind zulässige Werte für ihre `type`-Eigenschaft._

- {{domxref("XRSession.end_event", "end")}}
  - : Wird an der Sitzung ausgelöst, wenn sie beendet wurde, nachdem sie von der Anwendung oder dem {{Glossary("user agent")}} beendet wurde.
- {{domxref("XRSession.visibilitychange_event", "visibilitychange")}}
  - : Wird an der Sitzung ausgelöst, wenn sich ihr Sichtbarkeitszustand ändert.

## Beispiele

Dieses Beispiel erstellt einen Listener, der beobachtet, ob sich der Sichtbarkeitszustand der Sitzung ändert. Er reagiert, indem eine Funktion `mySessionVisible()` aufgerufen wird, die einen Boolean übergibt, der angibt, ob die Sitzung sichtbar ist oder nicht; diese Funktion könnte beispielsweise einen Worker starten oder umkonfigurieren, der für das Rendering der Szene zuständig ist.

```js
xrSession.addEventListener("visibilitystate", (e) => {
  switch (e.session.visibilitystate) {
    case "visible":
    case "visible-blurred":
      mySessionVisible(true);
      break;
    case "hidden":
      mySessionVisible(false);
      break;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
