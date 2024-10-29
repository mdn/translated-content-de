---
title: XRSessionEvent
slug: Web/API/XRSessionEvent
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRSessionEvent`** Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt ein Ereignis, das eine Zustandsänderung einer [`XRSession`](/de/docs/Web/API/XRSession) anzeigt. Diese Ereignisse treten beispielsweise auf, wenn die Sitzung endet oder sich die Sichtbarkeit ihres Kontextes ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`XRSessionEvent()`](/de/docs/Web/API/XRSessionEvent/XRSessionEvent)
  - : Erstellt und gibt ein neues `XRSessionEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften bietet `XRSessionEvent` folgende:_

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Instanz-Methoden

_Obwohl `XRSessionEvent` keine Methoden definiert, erbt es Methoden von seiner übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)._

## Sitzungsereignistypen

_Folgende Ereignisse werden über die `XRSessionEvent` Schnittstelle dargestellt und sind zulässige Werte für die Eigenschaft `type`._

- [`end`](/de/docs/Web/API/XRSession/end_event)
  - : Wird bei der Sitzung ausgelöst, wenn diese beendet wurde, nachdem sie von der Anwendung oder dem {{Glossary("user_agent", "User-Agent")}} beendet wurde.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)
  - : Wird bei der Sitzung ausgelöst, wann immer sich der Sichtbarkeitsstatus ändert.

## Beispiele

Dieses Beispiel erstellt einen Listener, der beobachtet, wann sich der Sichtbarkeitsstatus der Sitzung ändert. Er reagiert, indem er eine Funktion `mySessionVisible()` aufruft, die ein Boolean erhält, das angibt, ob die Sitzung sichtbar ist oder nicht; diese Funktion könnte beispielsweise einen Worker starten oder umkonfigurieren, der für das Rendern der Szene verantwortlich ist.

```js
xrSession.addEventListener("visibilitychange", (e) => {
  switch (e.session.visibilityState) {
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
