---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie Sie Übergänge erstellen und die Übergangsanimationen anpassen können, und wie Sie aktive Übergänge manipulieren können. Dies umfasst Übergänge sowohl für DOM-Statusaktualisierungen in einer Single-Page-App (SPA) als auch das Navigieren zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View-Transition-Prozess

Gehen wir den Prozess durch, wie ein Übergang funktioniert:

1. Ein Übergang wird ausgelöst. Wie dies geschieht, hängt vom Typ des Übergangs ab:
   - Bei Übergängen im gleichen Dokument (SPAs) wird ein Übergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung auslöst, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Bei Dokumentenübergreifenden Übergängen (MPAs) wird ein Übergang ausgelöst, indem die Navigation zu einem neuen Dokument eingeleitet wird. Sowohl das aktuelle als auch das Ziel-Dokument der Navigation müssen auf dem gleichen Ursprung sein und in den Übergang einwilligen, indem sie eine {{cssxref("@view-transition")}}-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` einschließen.
     > [!NOTE]
     > Ein aktiver Übergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (beispielsweise zurückgegeben von `startViewTransition()` im Falle von spa-Übergängen). Das `ViewTransition`-Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Phasen des Übergangs auszuführen. Weitere Informationen finden Sie unter [Steuerung von Übergängen mit JavaScript](#steuerung_von_übergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) erfasst die API statische Bild-Snapshots von Elementen, die eine {{cssxref("view-transition-name")}} auf sich deklariert haben.
3. Der Ansichtswechsel erfolgt:
   - Bei Übergängen im gleichen Dokument (SPAs) wird der an `startViewTransition()` übergebene Callback aufgerufen, was das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, sodass Sie auf die Aktualisierung des DOM antworten können.

   - Bei Dokumentenübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und den Ziel-Dokumenten.

4. Die API erfasst "Live"-Snapshots (bedeutet interaktive DOM-Bereiche) aus der neuen Ansicht.

   An diesem Punkt läuft der Übergang ab, und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, sodass Sie beispielsweise auf benutzerdefinierte JavaScript-Animationen reagieren können anstelle der Standardanimation.

5. Die alten Seitensnapshots animieren "hinaus", während die neuen Ansichts-Snapshots "herein" animieren. Standardmäßig animieren die alten Ansichts-Snapshots von {{cssxref("opacity")}} 1 bis 0, und die neuen Ansichts-Snapshots animieren von `opacity` 0 bis 1, was einen Überblendeffekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, sodass Sie reagieren können.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Übergang vollständig übersprungen.

### Eine Anmerkung zu Snapshots

Es ist erwähnenswert, dass wir beim Sprechen über Übergänge häufig den Begriff _Snapshot_ verwenden, um auf einen Teil der Seite zu verweisen, der eine `view-transition-name` auf sich deklariert hat. Diese Abschnitte werden separat von anderen Teilen der Seite animiert, die unterschiedliche `view-transition-name`-Werte auf sich haben. Während der Prozess der Animation eines Snapshots durch einen Übergang tatsächlich zwei separate Snapshots beinhaltet – einen der alten und einen der neuen UI-Zustände – verwenden wir Snapshot, um den gesamten Seitenbereich der Einfachheit halber zu beschreiben.

Der Snapshot des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht damit interagieren kann, während es "hinaus" animiert.

Der Snapshot des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während es "hinein" animiert.

### Der Pseudo-Element-Baum des View-Transitions

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Falle von Übergängen im gleichen Dokument (SPAs) wird der Pseudo-Element-Baum im Dokument bereitgestellt. Bei Dokumentenübergreifenden Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument bereitgestellt.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Übergangs-Overlays, das alle Übergangsgruppen enthält und über allen anderen Seiteninhalten liegt.
- Eine {{cssxref("::view-transition-group()")}} fungiert als Container für jeden Snapshot. Das `root`-Argument spezifiziert den Standard-Snapshot – die Übergangsanimation wird auf den Snapshot angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Snapshot des {{cssxref(":root")}}-Elements, weil die Standard-Browserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obige zurücksetzen und `view-transition-name: root` auf ein anderes Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Snapshot des alten Seitenelements, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Snapshot des neuen Seitenelements. Beide werden wie ersetzte Inhalte gerendert, in der gleichen Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Übergangsanimationen zu versehen, indem man ihnen einen unterschiedlichen {{cssxref("view-transition-name")}} zuweist. In solchen Fällen wird für jedes ein `::view-transition-group()` erstellt. Siehe [Unterschiedliche Animationen für verschiedene Elemente](#unterschiedliche_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die Pseudo-Elemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} jeweils mit Ihren Animationen ansprechen.

## Erstellung eines grundlegenden Übergangs

Dieser Abschnitt illustriert, wie man einen grundlegenden Übergang sowohl im SPA- als auch im MPA-Fall erstellt.

### Grundlegender SPA-Übergang

Ein SPA kann Funktionalität enthalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis irgendeiner Art zu aktualisieren, wie zum Beispiel das Klicken auf einen Navigationslink oder das Empfangen eines Updates vom Server.

Unser [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine einfache Bildergalerie. Wir haben eine Reihe von {{htmlelement("a")}}-Elementen, die Miniatur-{{htmlelement("img")}}-Elemente enthalten, die mit JavaScript dynamisch erzeugt wurden. Wir haben auch ein {{htmlelement("figure")}}-Element mit einem {{htmlelement("figcaption")}} und einem `<img>`, das die Bilder in voller Größe der Galerie anzeigt.

Wenn auf eine Miniatur geklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, was dazu führt, dass das Vollbild und die zugehörige Bildunterschrift innerhalb des `<figure>` angezeigt werden. Wir haben dies in eine `updateView()`-Funktion eingekapselt, die die View Transition API nur dann aufruft, wenn sie vom Browser unterstützt wird:

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

Dieser Code reicht aus, um den Übergang zwischen den angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Übergang von alten zu neuen Bildern und Bildunterschriften als weiche Überblendung (die Standard-Übergangsanimation). Es wird auch in nicht unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Grundlegender MPA-Übergang

Beim Erstellen eines dokumentenübergreifenden (MPA) Übergangs ist der Prozess sogar einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da das View-Update durch eine dokumentenübergreifende, gleichursprüngliche Navigation ausgelöst wird anstelle einer durch JavaScript ausgelösten DOM-Änderung. Um einen grundlegenden MPA-Übergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}}-Regel in das CSS sowohl des aktuellen als auch des Ziel-Dokuments aufnehmen, um sie zu opt-in zu machen, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie Sie [die ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des Übergangs anpassen können.

> [!NOTE]
> Derzeit können MPA-Übergänge nur zwischen gleichursprünglichen Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die Pseudo-Elemente der View Transitions haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) im Detail beschrieben sind).

Die meisten Aussehenübergänge haben eine standardmäßige weiche Überblendanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine weiche Skalierungsanimation angewendet.
- `position` und `transform` Übergänge haben eine weiche Bewegungsanimation angewendet.

Sie können die Standardanimationen auf jede gewünschte Weise mit regulärem CSS ändern – zielen Sie auf die "von"-Animation mit {{cssxref("::view-transition-old()")}}, und auf die "zu"-Animation mit {{cssxref("::view-transition-new()")}}.

Um beispielsweise die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen ansprechen, wenn Sie diese auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der Standardnutzagenten-Stile werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Möglichkeit, Ihren Code zu sichern – `::view-transition-group()` animiert auch, und Sie könnten am Ende unterschiedliche Dauern für die `group`/`image-pair` Pseudo-Elemente im Vergleich zu den `old` und `new` Pseudo-Elementen haben.

Im Falle von dokumentenübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Übergang funktioniert. Wenn Sie den Übergang in beide Richtungen verwenden möchten, müssen Sie ihn in beiden enthalten.

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) umfasst das obige CSS, geht aber einen Schritt weiter und definiert benutzerdefinierte Animationen, die auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente angewendet werden. Das Ergebnis ist, dass der Standard-Überblendungseffekt durch einen "Swipe-up"-Übergang ersetzt wird, wenn die Navigation erfolgt:

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

## Unterschiedliche Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während des Ansichts-Updates ändern, mit derselben Animation übergegangen. Wenn Sie möchten, dass einige Elemente anders als die Standardanimation `root` animiert werden, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} voneinander trennen. Zum Beispiel wird in unserem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) den {{htmlelement("figcaption")}}-Elementen der `view-transition-name` `figure-caption` zugewiesen, um sie von der restlichen Seite in Bezug auf Übergänge zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudo-Element-Baum nun so aus:

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

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht es, getrenntes Übergangs-Styling nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Ansichtsaufzeichnungen werden getrennt voneinander gehandhabt.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und auf die Pseudo-Elemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` angewendet. Wir haben auch eine Reihe von anderen Stilen zu beiden hinzugefügt, um sie an der gleichen Stelle zu halten und die Standardstile davon abzuhalten, mit unseren benutzerdefinierten Animationen zu interferieren.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudo-Element verwenden, um alle Snapshot-Pseudo-Elemente anzusprechen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name`-Werte

Die Eigenschaft `view-transition-name` kann einen eindeutigen {{cssxref("custom-ident")}}-Wert annehmen, der jeder Bezeichner sein kann, der nicht als Schlüsselwort fehlinterpretiert wird. Der Wert des `view-transition-name` für jedes gerenderte Element muss einzigartig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Er kann auch Schlüsselwortwerte annehmen von:

- `none`: Verursacht, dass das Element nicht an einem separaten Snapshot teilnimmt, es sei denn, es hat ein übergeordnetes Element mit einem `view-transition-name` festgelegt, in diesem Fall wird es als Teil dieses Elements gesnapshottet.
- `match-element`: Setzt automatisch eindeutige `view-transition-name`-Werte auf allen ausgewählten Elementen.

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher und ein schöneres Ergebnis als das oben genannte produzierte. Unser endgültiger `<figcaption>`-Übergang sah letztendlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer weichen Skalierung überblendet. Wir mussten nur in beiden Staaten eine feste `height` setzen, um es funktionieren zu lassen.

> [!NOTE]
> [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuerung von Übergängen mit JavaScript

Ein Übergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Antwort auf verschiedene Zustände des Übergangs auszuführen. Beispielsweise wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Element-Baum erstellt wurde und die Animation beginnen soll, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation beendet ist und die neue Seitenansicht sichtbar und interaktiv für den Benutzer ist.

Die `ViewTransition` kann folgendermaßen zugegriffen werden:

1. Im Falle von Übergängen im gleichen Dokument (SPA) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) die mit dem Übergang verbundene `ViewTransition` zurück.
2. Im Falle von dokumentenübergreifenden (MPA) Übergängen:
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Ziel-Dokument-Historie-Einträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine cross-origin URL irgendwo in der Weiterleitungskette hat, gibt die Eigenschaft `activation` `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Lassen Sie uns nun Beispielcode betrachten, um zu zeigen, wie diese Funktionen verwendet werden können.

### Eine JavaScript-gesteuerte benutzerdefinierte same-document (SPA) Transition

Das folgende JavaScript könnte verwendet werden, um eine zirkuläre Sichtübergangsanimation zu erstellen, die vom Standort des Benutzer-Cursors bei Klick ausgeht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation benötigt auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichts-Zustände in irgendeiner Weise verschmelzen (der neue Zustand "wischt" sich direkt über den alten Zustand, anstatt hineinzutransitionieren):

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

### Eine JavaScript-gesteuerte benutzerdefinierte cross-document (MPA) Transition

Die [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamprofilseiten und demonstriert, wie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisse verwendet werden können, um die ausgehenden und eingehenden Animationen eines dokumentenübergreifenden Übergangs basierend auf den "von" und "zu" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignislistener sieht wie folgt aus. Dies setzt Übergangsnamen auf den Elementen der ausgehenden Seite, die mit den Profilseiten verlinken. Wenn von der Startseite zu einer Profilseite navigiert wird, werden benutzerdefinierte Animationen _nur_ für die verlinkten Elemente bereitgestellt, die in jedem Fall angeklickt werden.

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
> Wir entfernen die `view-transition-name`-Werte, nachdem die Snapshots in jedem Fall gemacht wurden. Wenn wir sie gesetzt lassen würden, würden sie im Seitenzustand bestehen bleiben, der im {{Glossary("bfcache", "bfcache")}} nach der Navigation gespeichert wird. Wenn dann der Zurück-Button gedrückt wird, würde der `pagereveal`-Ereignishandler der Seite, zu der zurück navigiert wird, versuchen, dieselben `view-transition-name`-Werte auf verschiedenen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name`-Wert haben, wird der Übergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignislistener sieht wie folgt aus. Dies funktioniert auf ähnliche Weise wie der `pageswap` Ereignislistener, allerdings beachten Sie, dass wir hier die "zu" Animation für die Seitenelemente auf der neuen Seite anpassen.

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

## Stabilisieren des Seitenzustands um dokumentenübergreifende Übergänge konsistent zu machen

Bevor Sie einen dokumentenübergreifenden Übergang ausführen, möchten Sie idealerweise warten, bis der Zustand der Seite stabil ist und sich auf {{Glossary("Render_blocking", "Renderblocking")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt sind.
3. Das HTML, das für die anfängliche Ansicht der Seite des Nutzers sichtbar ist, analysiert wurde, sodass es konsistent rendert.

Stile werden standardmäßig Renderblockiert, und Skripte können mittels des Attributs [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) Renderblockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und konsistent rendert, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element müssen Sie die folgenden Attribute einfügen:

- `rel="expect"` um anzuzeigen, dass Sie dieses `<link>`-Element verwenden möchten, um ein wenig HTML auf der Seite zu renderblockieren.
- `href="#element-id"` um anzugeben, welche ID das Element hat, das Sie renderblockieren möchten.
- `blocking="render"` um das spezifizierte HTML zu renderblockieren.

Lassen Sie uns sehen, wie dies mit einem Beispiel-HTML-Dokument aussieht:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async src="layout.js" blocking="render"></script>

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

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis das Lead-Inhalt `<div>` analysiert wurde, was einen konsistenten Übergang ermöglicht.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut auf `<link rel="expect">`-Elementen spezifizieren. Zum Beispiel möchten Sie gegebenenfalls ein kleineres Maß an Inhalten blockieren, wenn sie auf einem schmaleren Gerät geladen werden, als bei einem breiteren Gerät. Dies ist sinnvoll – auf einem mobilen Gerät wird weniger Inhalt sichtbar sein, wenn die Seite zuerst geladen wird, verglichen mit dem Fall eines Desktops.

Dies könnte mit dem folgenden HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (width > 640px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (width <= 640px)" />
```
