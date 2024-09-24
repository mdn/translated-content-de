---
title: PageRevealEvent
slug: Web/API/PageRevealEvent
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`PageRevealEvent`**-Ereignisobjekt ist innerhalb der Handler-Funktionen für das {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignis verfügbar.

Während einer Cross-Dokument-Navigation ermöglicht es Ihnen, einen zugehörigen [View Transition](/de/docs/Web/API/View_Transitions_API) zu manipulieren (indem es Zugriff auf das relevante {{domxref("ViewTransition")}}-Objekt bietet) von dem Dokument, zu dem navigiert wird, falls die Navigation eine View Transition ausgelöst hat.

Außerhalb von View Transitions ist dieses Ereignis auch nützlich für Fälle wie das Auslösen einer Startanimation oder das Melden eines Seitenaufrufs. Es entspricht dem ersten Durchlauf von {{domxref("Window.requestAnimationFrame()")}} nach einer Cross-Dokument-Navigation, wenn Sie `requestAnimationFrame()` im {{htmlelement("head")}} des Dokuments auslösen würden. Zum Beispiel, wenn Sie die folgende `reveal()`-Funktion im `<head>` ausführen:

```js
function reveal() {
  // Startanimation hier einfügen
}
/* Dies wird im ersten gerenderten Frame nach dem Laden ausgelöst */
requestAnimationFrame(() => reveal());

/* Dies wird ausgelöst, wenn die Seite aus dem BFCache wiederhergestellt wird */
window.onpagehide = () => requestAnimationFrame(() => reveal());
```

## Constructor

- {{domxref("PageRevealEvent.PageRevealEvent", "PageRevealEvent()")}} {{experimental_inline}}
  - : Erstellt eine neue Instanz des `PageRevealEvent`-Objekts.

## Instanz-Eigenschaften

- {{domxref("PageRevealEvent.viewTransition", "viewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Enthält ein {{domxref("ViewTransition")}}-Objekt, das die aktive View Transition für die Cross-Dokument-Navigation repräsentiert.

## Beispiele

```js
window.addEventListener("pagereveal", async (e) => {
  // Wenn der "from"-Verlaufseintrag nicht existiert, zurückkehren
  if (!navigation.activation.from) return;

  // Nur ausführen, wenn eine aktive View Transition existiert
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Wechsel von der Profilseite zur Startseite
    // ~> Set VT-Namen auf das relevante Listenelement
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Setze view-transition-name-Werte auf die zu animierenden Elemente
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Entfernen der Namen, nachdem die Schnappschüsse aufgenommen wurden
      // damit wir bereit für die nächste Navigation sind
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Wechsel zur Profilseite
    // ~> VT-Namen auf den Haupttitel und das Bild setzen
    if (isProfilePage(currentUrl)) {
      // Setze view-transition-name-Werte auf die zu animierenden Elemente
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Entfernen der Namen, nachdem die Schnappschüsse aufgenommen wurden
      // damit wir bereit für die nächste Navigation sind
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Sehen Sie sich die [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.netlify.app/profiles/mpa/) für die Live-Demo an, aus der dieser Code stammt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
