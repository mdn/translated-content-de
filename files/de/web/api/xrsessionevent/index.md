---
title: XRSessionEvent
slug: Web/API/XRSessionEvent
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRSessionEvent`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt ein Ereignis, das eine Zustandsänderung einer [`XRSession`](/de/docs/Web/API/XRSession) anzeigt. Diese Ereignisse treten beispielsweise auf, wenn die Sitzung endet oder sich die Sichtbarkeit ihres Kontextes ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`XRSessionEvent()`](/de/docs/Web/API/XRSessionEvent/XRSessionEvent)
  - : Erstellt und gibt ein neues `XRSessionEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den von der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften bietet `XRSessionEvent` die folgenden:_

- [`session`](/de/docs/Web/API/XRSessionEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.

## Instanz-Methoden

_Während `XRSessionEvent` keine eigenen Methoden definiert, erbt es Methoden von seiner übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)._

## Sitzungsevent-Typen

_Folgende Ereignisse werden über die `XRSessionEvent`-Schnittstelle dargestellt und sind zulässige Werte für die `type`-Eigenschaft._

- [`end`](/de/docs/Web/API/XRSession/end_event)
  - : Wird ausgelöst, wenn die Sitzung beendet wurde, nachdem sie von der Anwendung oder dem [Benutzeragenten](/de/docs/Glossary/user_agent) beendet wurde.
- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)
  - : Wird ausgelöst, wenn sich der Sichtbarkeitsstatus der Sitzung ändert.

## Beispiele

Dieses Beispiel erstellt einen Listener, der darauf achtet, dass sich der Sichtbarkeitsstatus der Sitzung ändert. Er reagiert, indem er eine Funktion `mySessionVisible()` mit einem Boolean aufruft, der anzeigt, ob die Sitzung sichtbar ist oder nicht; diese Funktion könnte beispielsweise einen Worker starten oder neu konfigurieren, der die Szene rendert.

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
