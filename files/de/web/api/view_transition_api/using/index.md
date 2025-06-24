---
title: Verwenden der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie Sie View Transitions erstellen und die Übergangsanimationen anpassen können, und wie Sie aktive View Transitions manipulieren. Dies umfasst View Transitions sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View Transition Prozess

Lassen Sie uns den Prozess durchgehen, durch den ein View Transition funktioniert:

1. Ein View Transition wird ausgelöst. Wie dies geschieht, hängt vom Typ des View Transitions ab:
   - Bei denselben Dokumentübergängen (SPAs) wird ein View Transition ausgelöst, indem die Funktion, die die DOM-Aktualisierung des View Changes auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Falle von dokumentübergreifenden Übergängen (MPAs) wird ein View Transition durch die Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen auf demselben Ursprung sein und in den View Transition einwilligen, indem sie eine {{cssxref("@view-transition")}} Regel in ihrem CSS mit einem `navigation` Descriptor von `auto` enthalten.
     > [!NOTE]
     > Ein aktiver View Transition hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel, zurückgegeben von `startViewTransition()` im Falle von gleich dokumentierten (SPA) Übergängen). Das `ViewTransition` Objekt enthält mehrere Versprechen, die es Ihnen ermöglichen, Code in Reaktion auf verschiedene Teile des View Transition Prozesses auszuführen. Weitere Informationen finden Sie unter [Controlling view transitions with JavaScript](#kontrollieren_von_view_transitions_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API statische Bild**snapshots** von Elementen, die eine {{cssxref("view-transition-name")}} deklariert haben.
3. Der View Change erfolgt:

   - Im Falle von gleich dokumentierten Übergängen (SPAs) wird der Callback, der an `startViewTransition()` übergeben wird, aufgerufen, was dazu führt, dass sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) Versprechen erfüllt, was Ihnen ermöglicht, auf die DOM-Aktualisierung zu reagieren.

   - Im Falle von dokumentübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst "Live"-Snapshots (das heißt interaktive DOM-Bereiche) aus der neuen Ansicht.

   An diesem Punkt ist der View Transition dabei, ausgeführt zu werden, und das [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) Versprechen wird erfüllt, was Ihnen ermöglicht, beispielsweise eine benutzerdefinierte JavaScript-Animation anstelle der Standardanimation auszuführen.

5. Die Snapshots der alten Seite animieren "heraus", während die Snapshots der neuen Ansicht "hinein" animieren. Standardmäßig animieren die alten Ansichtssnapshots von {{cssxref("opacity")}} 1 zu 0 und die neuen Ansichtssnapshots von `opacity` 0 zu 1, was einen Überblendeffekt erzeugt.
6. Wenn die Überganganimationen ihre Endzustände erreicht haben, wird das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) Versprechen erfüllt, was Ihnen ermöglicht zu reagieren.

> [!NOTE]
> Wenn der [Seite Sichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument von einem Fenster verdeckt wird, der Browser minimiert ist oder eine andere Browser-Registerkarte aktiv ist), während eines [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) Aufrufs, wird die View Transition komplett übersprungen.

### Eine Randbemerkung zu Snapshots

Es ist bemerkenswert, dass wir beim Sprechen über View Transitions häufig den Begriff _snapshot_ verwenden, um sich auf einen Teil der Seite zu beziehen, der einen `view-transition-name` deklariert hat. Diese Abschnitte werden separat von anderen Teilen der Seite mit unterschiedlichen `view-transition-name` Werten animiert. Während der Prozess, einen Snapshot über eine View Transition zu animieren, tatsächlich zwei separate Snapshots umfasst — einen des alten und einen des neuen UI-Zustands — verwenden wir "snapshot", um der Einfachheit halber auf den gesamten Seitenbereich zu verweisen.

Der Snapshot des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht damit interagieren kann, während es "heraus" animiert.

Der Snapshot des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer beginnen kann, mit dem neuen Inhalt zu interagieren, während es "hinein" animiert.

### Der View Transition Pseudoelement-Baum

Um die ausgehenden und eingehenden Überganganimationen zu erstellen, konstruiert die API einen Pseudoelement-Baum mit folgender Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

Im Falle von gleich dokumentierten Übergängen (SPAs) wird der Pseudoelement-Baum im Dokument verfügbar gemacht. Bei dokumentübergreifenden Übergängen (MPAs) wird der Pseudoelement-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des View Transitions Overlays, das alle View Transition Gruppen enthält und über allen anderen Inhalten der Seite sitzt.
- Ein {{cssxref("::view-transition-group()")}} fungiert als Container für jeden View Transition-Snapshot. Das `root` Argument gibt den Standard-Snapshot an — die View Transition Animation wird auf den Snapshot angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies ein Snapshot des {{cssxref(":root")}} Elements, da die Standard-Browser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obenstehende aufheben und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Snapshot des alten Seitenelements ab und {{cssxref("::view-transition-new()")}} zielt auf den Live-Snapshot des neuen Seitenelements ab. Beide werden als ersetzter Inhalt gerendert, auf die gleiche Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit verschiedenen benutzerdefinierten View Transition Animationen zu animieren, indem auf jedem ein anderer {{cssxref("view-transition-name")}} gesetzt wird. In solchen Fällen wird für jedes ein `::view-transition-group()` erstellt. Siehe [Different animations for different elements](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen zu personalisieren, die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelemente mit Ihren Animationen anvisieren.

## Erstellen eines einfachen View Transitions

Dieser Abschnitt veranschaulicht, wie man einen einfachen View Transition sowohl im SPA- als auch im MPA-Fall erstellt.

### Einfacher SPA View Transition

Ein SPA kann Funktionalitäten beinhalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis irgendeiner Art zu aktualisieren, wie z.B. das Klicken auf einen Navigationslink oder ein von einem Server gepushtes Update.

Unser [View Transitions SPA-Beispiel](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine einfache Bildergalerie. Wir haben eine Reihe von {{htmlelement("a")}} Elementen, die Thumbnail-{{htmlelement("img")}} Elemente beinhalten, die dynamisch mit JavaScript erzeugt werden. Wir haben auch ein {{htmlelement("figure")}} Element, das ein {{htmlelement("figcaption")}} und ein `<img>` enthält, das die Großformat-Galeriebilder anzeigt.

Wenn auf ein Thumbnail geklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, was dazu führt, dass das Großformatbild und die zugehörige Bildunterschrift im `<figure>` angezeigt werden. Wir haben dies in eine `updateView()` Funktion eingekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützte Browser zeigen den Wechsel von alten zu neuen Bildern und Bildunterschriften als glattes Überblenden an (die Standardansicht Transition). Es funktioniert immer noch in nicht unterstützenden Browsern, aber ohne die schöne Animation.

### Einfacher MPA View Transition

Beim Erstellen eines dokumentübergreifenden (MPA) View Transitions ist der Prozess sogar einfacher als bei SPAs. Kein JavaScript ist erforderlich, da das Update der Ansicht durch eine dokumentübergreifende, gleich-originelle Navigation statt durch eine JavaScript-initiierte DOM-Änderung ausgelöst wird. Um einen einfachen MPA View Transition zu ermöglichen, müssen Sie in beiden den aktuellen und Zieldokumenten eine {{cssxref("@view-transition")}} Regel in ihrem CSS angeben, um sie einzuoptieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie Sie die [ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des View Transitions anpassen können.

> [!NOTE]
> Derzeit können MPA View Transitions nur zwischen gleich-originellen Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View Transitions Pseudoelemente haben standardmäßig [CSS Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements)) detailliert sind.

Die meisten Erscheinungsübergänge erhalten eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine glatte Skalierungsanimation angewendet.
- `position` und `transform` Übergänge haben eine glatte Bewegungsanimation angewendet.

Sie können die Standardanimationen in jeder gewünschten Weise mit regulärem CSS modifizieren — visieren Sie die "from" Animation mit {{cssxref("::view-transition-old()")}} an, und die "to" Animation mit {{cssxref("::view-transition-new()")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen anvisieren, in Fällen, in denen Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Wegen der Pseudoelement-Hierarchie und der Standard-Benutzeragenten-Stile werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Möglichkeit, Ihren Code zu sichern — `::view-transition-group()` animiert auch und Sie könnten unterschiedliche Dauer für die `group`/`image-pair` Pseudoelemente gegenüber den `old` und `new` Pseudoelementen haben.

Im Falle von dokumentübergreifenden (MPA) Übergängen müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit der View Transition funktioniert. Wenn Sie den View Transition in beide Richtungen verwenden möchten, müssen Sie ihn in beiden einbeziehen.

Unser [View Transitions MPA-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht aber noch einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und sie auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudoelemente anwendet. Das Ergebnis ist, dass der Standard-Überblendungsübergang durch einen "Hochwischen"-Übergang ersetzt wird, wenn eine Navigation stattfindet:

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

Standardmäßig werden alle verschiedenen Elemente, die sich während des Ansicht-Updates ändern, mit derselben Animation übergeblendet. Wenn Sie möchten, dass einige Elemente anders als die Standard `root` Animation animieren, können Sie sie mit der {{cssxref("view-transition-name")}} Eigenschaft trennen. Zum Beispiel, in unserem [View Transitions SPA-Beispiel](https://mdn.github.io/dom-examples/view-transitions/spa/) erhalten die {{htmlelement("figcaption")}} Elemente einen `view-transition-name` von `figure-caption`, um sie in Bezug auf View Transitions vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet würde der generierte Pseudoelement-Baum jetzt so aussehen:

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

Das Vorhandensein des zweiten Satzes von Pseudoelementen ermöglicht es, separate View Transition Stylinge nur auf das `<figcaption>` anzuwenden. Die verschiedenen alten und neuen Ansichts-Snapshots werden getrennt voneinander behandelt.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudoelemente angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an der gleichen Stelle zu halten und die Standardstilierung daran zu hindern, unsere benutzerdefinierten Animationen zu beeinträchtigen.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudoelement verwenden, um auf alle Snapshot-Pseudoelemente zu zielen, unabhängig davon, welchen Namen sie haben. Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name` Werte

Die `view-transition-name` Eigenschaft kann einen eindeutigen {{cssxref("custom-ident")}} Wert annehmen, der jede Kennung sein kann, die nicht als ein Schlüsselwort missverstanden werden würde. Der Wert von `view-transition-name` für jedes gerenderte Element muss eindeutig sein. Falls zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang übersprungen.

Sie kann auch Schlüsselwortwerte annehmen wie:

- `none`: Verursacht, dass das Element nicht an einem separaten Snapshot teilnimmt, es sei denn, es hat ein übergeordnetes Element mit einem gesetzten `view-transition-name`, in diesem Fall wird es als Teil dieses Elements gesnapshottet.
- `match-element`: Setzt automatisch eindeutige `view-transition-name` Werte auf allen ausgewählten Elementen.

### Nutzen Sie die Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als das oben Genannte produziert hat. Unser endgültiger `<figcaption>` View Transition sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einem sanften Maßstab überblendet. Wir mussten nur eine feste `height` auf beiden Zuständen setzen, um es arbeiten zu lassen.

> [!NOTE] > [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Kontrollieren von View Transitions mit JavaScript

Ein View Transition hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Versprechen-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudoelement-Baum erstellt und die Animation im Begriff ist zu starten, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann wie folgt aufgerufen werden:

1. Im Falle von gleich dokumentierten (SPA) Übergängen gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den `ViewTransition` zurück, der mit dem Übergang assoziiert ist.
2. Im Falle von dokumentübergreifenden (MPA) Übergängen:
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Eigenschaft als auch eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation) mit Informationen über den Navigationstyp und die aktuellen und zukünftigen Dokument-Historieeinträge.
     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungskette hat, gibt die `activation` Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "bfcache")}} oder {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf den `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Eigenschaft.

Lassen Sie uns einige Beispielcodes betrachten, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Eine durch JavaScript kraftvolle benutzerdefinierte gleich dokumentierte (SPA) Transition

Das folgende JavaScript könnte verwendet werden, um eine kreisförmige Enthüllungsansichts-Transition zu erzeugen, die von der Position des Cursors des Benutzers beim Klicken ausgeht, wobei die Animation durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und die alten und neuen Ansichts-Zustände daran zu hindern, in irgend einer Weise zu mischen (der neue Zustand "wischt" direkt über den alten Zustand, anstatt in ihn hinein zu überblenden):

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

### Eine durch JavaScript kraftvolle benutzerdefinierte dokumentübergreifende (MPA) Transition

Das [Liste der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamprofilseiten und demonstriert, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet, um die ausgehenden und eingehenden Animationen einer dokumentübergreifenden View Transition basierend auf den "von" und "zu" URLs zu personalisieren.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis-Listener sieht wie folgt aus. Dieser setzt View Transition Namen auf den Elementen auf der ausgehenden Seite, die auf die Profilseiten verlinken. Wenn von der Startseite zu einer Profilseite navigiert wird, werden benutzerdefinierte Animationen _nur_ für das angeklickte Verknüpfungselement bereitgestellt.

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
> Wir entfernen die `view-transition-name` Werte, nachdem die Snapshots in jedem Fall aufgenommen wurden. Wenn wir sie gesetzt lassen würden, würden sie bei der Navigation im {{Glossary("bfcache", "bfcache")}} im Seitenstatus gespeichert bleiben. Wenn dann der Zurück-Button gedrückt würde, würde der `pagereveal` Ereignishandler der Seite, zu der zurück navigiert wird, dann versuchen, dieselben `view-transition-name` Werte auf andere Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird die View Transition übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht wie folgt aus. Dieser funktioniert auf ähnliche Weise wie der `pageswap` Ereignis-Listener, obwohl Sie daran denken sollten, dass wir hier die "zu" Animation für Seitenelemente auf der neuen Seite personalisieren.

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

## Stabilisieren des Seitenzustands, um dokumentübergreifende Transitionen konsistent zu machen

Vor dem Ausführen einer dokumentübergreifenden Transition möchten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, und sich auf {{Glossary("Render_blocking", "Renderblockierung")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML für die anfängliche Ansicht des Benutzers auf der Seite analysiert wurde, sodass es konsistent gerendert wird.

Stile werden standardmäßig renderblockiert, und Skripte können durch das [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) Attribut renderblockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent gerendert wird, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element beinhalten Sie die folgenden Attribute:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>` Element verwenden möchten, um einige HTML-Inhalte auf der Seite renderblockiert zu verhindern.
- `href="#element-id"` um die ID des Elements anzugeben, das Sie renderblockiert verhindern möchten.
- `blocking="render"` um die angegebene HTML zu renderblockiert zu verhindern.

Lassen Sie uns untersuchen, wie das mit einem Beispiel HTML-Dokument aussieht:

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

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis die Lead-Content-`<div>` analysiert wurde, was eine konsistente Übergangsansicht gewährleistet.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel möchten Sie vielleicht das Rendering auf eine kleinere Menge von Inhalten blockieren, wenn die Seite auf einem Gerät mit schmalem Bildschirm geladen wird, als auf einem Gerät mit breitem Bildschirm. Das macht Sinn — auf einem Mobile wird weniger Inhalt sichtbar sein, wenn die Seite zuerst lädt, als im Fall eines Desktops.

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
