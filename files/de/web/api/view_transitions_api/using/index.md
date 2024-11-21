---
title: Verwenden der View Transitions API
slug: Web/API/View_Transitions_API/Using
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("View Transitions API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transitions API](/de/docs/Web/API/View_Transitions_API), wie man Sichtwechsel erstellt und die Übergangsanimationen anpasst sowie wie man aktive Sichtwechsel manipuliert. Dies umfasst Sichtwechsel sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für das Navigieren zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Sichtwechselprozess

Lassen Sie uns den Prozess durchgehen, mit dem ein Sichtwechsel funktioniert:

1. Ein Sichtwechsel wird ausgelöst. Wie dies geschieht, hängt vom Typ des Sichtwechsels ab:
   - Im Falle von transitions im gleichen Dokument (SPAs) wird ein Sichtwechsel ausgelöst, indem die Funktion, die die DOM-Aktualisierung verursacht, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Falle von transitions zwischen Dokumenten (MPAs) wird ein Sichtwechsel durch Einleiten der Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen die gleiche Ursprungsadresse (Origin) haben und durch Einschließen einer {{cssxref("@view-transition")}} Regel in ihrem CSS mit einem `navigation` Descriptor von `auto` in den Sichtwechsel einwilligen.
     > [!NOTE]
     > Ein aktiver Sichtwechsel hat eine zugehörige Instanz von [`ViewTransition`](/de/docs/Web/API/ViewTransition) (z.B. zurückgegeben von `startViewTransition()` im Falle von transitions im gleichen Dokument (SPA)). Das `ViewTransition` Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Sichtwechselprozesses auszuführen. Weitere Informationen finden Sie unter [Sichtwechsel mit JavaScript steuern](#sichtwechsel_mit_javascript_steuern).
2. Auf der aktuellen (alten Seite) Sicht erfasst die API Schnappschüsse von Elementen, auf denen eine {{cssxref("view-transition-name")}} deklariert wurde.
3. Der Sichtwechsel findet statt:

   - Im Falle von transitions im gleichen Dokument (SPAs) wird der Callback, der an `startViewTransition()` übergeben wurde, aufgerufen, was das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, was Ihnen ermöglicht, auf die DOM-Aktualisierung zu reagieren.

   - Im Falle von transitions zwischen Dokumenten (MPAs) erfolgt die Navigation zwischen den aktuellen und Zieldokumenten.

4. Die API erfasst Schnappschüsse der neuen Sicht als Live-Darstellung.

   Zu diesem Zeitpunkt steht der Sichtwechsel kurz vor der Ausführung und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, was Ihnen ermöglicht, eine benutzerdefinierte JavaScript-Animation anstelle der Standardanimation auszuführen, zum Beispiel.

5. Die alten Seiten-Schnappschüsse animieren "hinaus", während die neuen Sicht-Schnappschüsse "hinein" animieren. Standardmäßig animieren die alten Sicht-Schnappschüsse von {{cssxref("opacity")}} 1 zu 0, und die neuen Sicht-Schnappschüsse animieren von `opacity` 0 zu 1, was ein Überblendungseffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, wodurch Sie reagieren können.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) eines Dokuments `hidden` ist (zum Beispiel, wenn das Dokument von einem Fenster verdeckt wird, das Browserfenster minimiert ist oder ein anderer Browsertab aktiv ist) während eines Aufrufs zu [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Sichtwechsel vollständig übersprungen.

### Der Pseudoelement-Baum für den Sichtwechsel

Um die ausgehenden und eingehenden Übergangsanimationen zu handhaben, konstruiert die API einen Baum für Pseudoelemente mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}} Unterbaum wird für jeden erfassten `view-transition-name` erstellt.

Im Falle von transitions im gleichen Dokument (SPAs) wird der Pseudoelement-Baum im Dokument verfügbar gemacht. Im Falle von transitions zwischen Dokumenten (MPAs) wird der Pseudoelement-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Sichtwechsel-Overlays, die alle Schnappschussgruppen von Sichtwechseln enthält und über dem restlichen Seiteninhalt liegt.
- Ein {{cssxref("::view-transition-group")}} fungiert als Container für jede Schnappschussgruppe von Sichtwechseln. Das Argument `root` gibt die Standardschnappschussgruppe an – die Sichtwechselanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}} Element, da die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obige aufheben und `view-transition-name: root` auf ein anderes Element setzen.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Schnappschuss des alten Seitenelements und {{cssxref("::view-transition-new")}} zielt auf den Live-Schnappschuss des neuen Seitenelements. Beide werden als ersetzter Inhalt gerendert, ähnlich wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit praktischen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Sichtwechselanimationen anzusprechen, indem ein anderer {{cssxref("view-transition-name")}} auf jedes gesetzt wird. In solchen Fällen wird ein `::view-transition-group` für jedes erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die Pseudoelemente {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} mit Ihren Animationen anvisieren.

## Erstellen eines grundlegenden Sichtwechsels

In diesem Abschnitt wird veranschaulicht, wie man einen grundlegenden Sichtwechsel sowohl im SPA- als auch im MPA-Fall erstellt.

### Grundlegender SPA-Sichtwechsel

Ein Beispiel: Eine SPA könnte Funktionalitäten umfassen, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis irgendwie zu aktualisieren, wie z.B. das Klicken auf einen Navigationslink oder ein Update, das vom Server gesendet wird. In unserem [Sichtwechsel SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies auf eine `displayNewImage()` Funktion vereinfacht, die ein neues Vollbild basierend auf dem angeklickten Thumbnail anzeigt. Wir haben dies in eine `updateView()` Funktion gekapselt, die die View Transitions API nur dann aufruft, wenn sie vom Browser unterstützt wird:

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Bildunterschriften als sanfte Überblendung (den Standard-Sichtwechsel). In nicht unterstützenden Browsern funktioniert es weiterhin, jedoch ohne die schöne Animation.

### Grundlegender MPA-Sichtwechsel

Beim Erstellen eines transitions zwischen Dokumenten (MPA) ist der Prozess sogar noch einfacher als bei SPAs. Kein JavaScript ist erforderlich, da das Sichtupdate durch eine Navigation zwischen Dokumenten des gleichen Ursprungs ausgelöst wird, anstatt durch eine JavaScript-initiierte DOM-Änderung. Um einen grundlegenden MPA-Sichtwechsel zu ermöglichen, müssen Sie eine {{cssxref("@view-transition")}} Regel in das CSS sowohl für das aktuelle als auch das Zieldokument einfügen, um sie einzubinden, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [Sichtwechsel MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie man [die ausgehenden und eingehenden Animationen](#ihre_animationen_anpassen) des Sichtwechsels anpasst.

> [!NOTE]
> Zurzeit können MPA Sichtwechsel nur zwischen Dokumenten des gleichen Ursprungs erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Ihre Animationen anpassen

Die Pseudoelemente der View Transitions haben Standard-[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transitions_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsübergänge erhalten eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine sanfte Skalierungsanimation angewendet.
- `position`- und `transform`-Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen auf beliebige Weise mit regulärem CSS modifizieren — zielen Sie die "von"-Animation mit {{cssxref("::view-transition-old")}} an und die "zu"-Animation mit {{cssxref("::view-transition-new")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, die `::view-transition-group()` mit solchen Stilen zu zielen, wenn Sie möchten, dass sie auf `::view-transition-old()` und `::view-transition-new()` angewendet werden. Aufgrund der Pseudoelement-Hierarchie und dem Standardbrowserstyling werden die Stile auf beide vererbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu schützen — `::view-transition-group()` animiert ebenfalls und Sie könnten am Ende unterschiedliche Dauern für die `group`/`image-pair` Pseudoelemente im Vergleich zu den `old` und `new` Pseudoelementen haben.

Im Falle von transitions zwischen Dokumenten (MPA) müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit der Sichtwechsel funktioniert. Wenn Sie den Sichtwechsel in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben genannte CSS, geht jedoch in der Anpassung einen Schritt weiter, definiert benutzerdefinierte Animationen und wendet sie auf die Pseudoelemente `::view-transition-old(root)` und `::view-transition-new(root)` an. Das Ergebnis ist, dass der standardmäßige Überblendungsübergang bei Navigation durch einen "nach oben blättern" Übergang ersetzt wird:

```css
/* Create a custom animation */

@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Apply the custom animation to the old and new page states */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## Verschiedene Animationen für verschiedene Elemente

Standardmäßig werden alle unterschiedlichen Elemente, die sich während des Sichtupdates ändern, mit derselben Animation überblendet. Wenn Sie möchten, dass einige Elemente anders als die Standard-`root`-Animation animiert werden, können Sie sie mit der {{cssxref("view-transition-name")}} Eigenschaft voneinander trennen. Zum Beispiel werden in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}} Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie hinsichtlich der Sichtwechsel vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, wird der generierte Pseudoelement-Baum jetzt so aussehen:

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

Das Vorhandensein des zweiten Satzes von Pseudoelementen ermöglicht es, separate Sichtwechsel-Styling nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Sichtaufnahmen werden separat voneinander behandelt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie möchten, außer `none` — der Wert `none` bedeutet ausdrücklich, dass das Element nicht an einem Sichtwechsel teilnehmen wird.
>
> `view-transition-name` Werte müssen auch eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf das `<figcaption>` an:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und auf die Pseudoelemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an derselben Stelle zu halten und das Standardstyling davon abzuhalten, unsere benutzerdefinierten Animationen zu stören.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudoelement verwenden, um alle Momentaufnahme-Pseudoelemente anzusprechen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher war und ein schöneres Ergebnis als das obige produzierte. Unser endgültiger `<figcaption>`-Sichtwechsel sah am Ende so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skalierung überblendet. Wir mussten nur eine feste `height` in beiden Zuständen einstellen, damit es funktioniert.

> **Hinweis:** [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Sichtwechsel mit JavaScript steuern

Ein Sichtwechsel hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promisemember enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedenen Zustände des Übergangs auszuführen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudoelement-Baum erstellt ist und die Animation kurz davor steht zu starten, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation beendet ist und die neue Seite für den Benutzer sichtbar und interaktiv ist.

Auf das `ViewTransition` kann wie folgt zugegriffen werden:

1. Im Fall von transitions im gleichen Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den `ViewTransition` zurück, der mit dem Übergang verknüpft ist.
2. Im Fall von transitions zwischen Dokumenten (MPA):

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird. Das dazugehörige Event-Objekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition), sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Zieldokumment-Historieeinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine cross-origin URL in der Umleitkette hat, gibt die `activation` Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} (bfcache) oder {{Glossary("Prerender", "Vorabrenderung")}}). Das dazugehörige Event-Objekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Schauen wir uns einige Beispielcodes an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang im gleichen Dokument (SPA)

Das folgende JavaScript könnte verwendet werden, um einen kreisförmigen Sichtwechsel zu erstellen, der von der Position des Benutzer-Cursors bei einem Klick ausgeht, mit Animation bereitgestellt von der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root's new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Sichtzustände in irgendeiner Weise überblendet werden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt rein zu überblenden):

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang zwischen Dokumenten (MPA)

Das [List of Chrome DevRel team members](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Reihe von Team-Profilseiten und demonstriert, wie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet werden können, um die ausgehenden und eingehenden Animationen eines transitions zwischen Dokumenten basierend auf den "von" und "zu" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Event-Listener sieht wie folgt aus. Dies setzt Sichtwechsel-Namen auf den Elementen, die zur Profilseite auf der ausgehenden Seite verlinken. Bei der Navigation von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das verlinkte Element bereitgestellt, das in jedem Fall angeklickt wurde.

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Wir entfernen die `view-transition-name`-Werte, nachdem die Schnappschüsse in jedem Fall aufgenommen wurden. Wenn wir sie gesetzt lassen, würden sie im Seitenzustand gespeichert, der im {{Glossary("bfcache", "bfcache")}} bei der Navigation gespeichert wird. Wenn dann die Zurück-Taste gedrückt würde, würde der `pagereveal`-Ereignishandler der Seite, zu der zurück navigiert wurde, versuchen, dieselben `view-transition-name`-Werte auf verschiedene Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der Sichtwechsel übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht wie folgt aus. Dies funktioniert ähnlich wie der `pageswap`-Ereignis-Listener, obwohl man bedenken muss, dass hier die "zu" Animation angepasst wird, für Seitenelemente auf der neuen Seite.

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## Stabilisierung des Seitenzustands, um konsistente transitions zwischen Dokumenten zu gewährleisten

Bevor ein Übergang zwischen Dokumenten ausgeführt wird, sollten Sie idealerweise warten, bis sich der Status der Seite stabilisiert hat, und sich auf {{Glossary("Render_blocking", "Renderblockierung")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML für die Anfangsansicht der Seite des Benutzers analysiert wurde, sodass es konsistent rendert.

Stile werden standardmäßig renderblockiert, und Skripte können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/script#blocking) renderblockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent gerendert wird, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect) verwenden. In diesem Element fügen Sie die folgenden Attribute ein:

- `rel="expect"` um anzuzeigen, dass Sie dieses `<link>` Element verwenden möchten, um einige HTML-Elemente auf der Seite renderblockierend zu machen.
- `href="#element-id"` um die ID des Elements anzugeben, das Sie renderblockierend machen möchten.
- `blocking="render"` um das angegebene HTML renderblockierend zu machen.

Lassen Sie uns untersuchen, wie dies mit einem Beispiel-HTML-Dokument aussieht:

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async href="layout.js" blocking="render"></script>

    <!-- Use rel="expect" and blocking="render" to ensure the
         #lead-content element is visible and fully parsed before
         activating the transition -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Page title</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">The first section</section>
      <section>The second section</section>
    </div>
  </body>
</html>
```

Das Ergebnis ist, dass die Dokumentwiedergabe blockiert wird, bis das führende Inhalts-`<div>` analysiert wurde, was eine konsistente Sichtwechsel gewährleistet.

Sie können auch ein [`media`](/de/docs/Web/HTML/Element/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie möglicherweise das Rendern bei einem kleineren Inhalt blockieren, wenn die Seite auf einem Gerät mit schmalem Bildschirm geladen wird, als auf einem Gerät mit breitem Bildschirm. Das macht Sinn — auf einem Mobilgerät wird weniger Inhalt sichtbar sein, wenn die Seite das erste Mal geladen wird, als im Falle eines Desktops.

Dies könnte mit dem folgenden HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
