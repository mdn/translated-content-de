---
title: "<details>: Das Details-Disclosure-Element"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{HTMLSidebar}}

Das **`<details>`**-[HTML](/de/docs/Web/HTML)-Element erstellt ein Disclosure-Widget, in dem Informationen nur sichtbar sind, wenn das Widget in den offenen Zustand umgeschaltet wird. Ein Zusammenfassungs- oder Beschriftungselement muss mithilfe des {{HTMLElement("summary")}}-Elements bereitgestellt werden.

Ein Disclosure-Widget wird normalerweise auf dem Bildschirm mit einem kleinen Dreieck angezeigt, das sich dreht (oder verdreht), um den offenen/geschlossenen Zustand anzuzeigen, mit einem Etikett neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Beschriftung für das Disclosure-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>`-Widget kann in einem von zwei Zuständen sein. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und das Etikett innerhalb von `<summary>` an (oder eine vom {{Glossary("user_agent", "Benutzeragenten")}} definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, „verdreht“ es sich und zeigt seinen Inhalt an. Die übliche Verwendung eines Dreiecks, das sich dreht oder verdreht, um die Öffnung oder Schließung des Widgets darzustellen, ist der Grund, warum diese manchmal als „Twisty“ bezeichnet werden.

Sie können CSS verwenden, um das Disclosure-Widget zu gestalten, und Sie können das Widget programmgesteuert öffnen und schließen, indem Sie das [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, den Übergang zwischen offenem und geschlossenem Zustand zu animieren.

Im Standardzustand, wenn geschlossen, ist das Widget nur so hoch, dass es das Dreieck und die Zusammenfassung anzeigt. Wenn es geöffnet ist, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies oder das {{cssxref("::marker")}}-Pseudo-Element verwenden, um das [Disclosure-Widget anzupassen](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses Boolean-Attribut gibt an, ob die Details – das heißt, der Inhalt des `<details>`-Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder ausgeblendet, wenn es fehlt. Standardmäßig ist dieses Attribut nicht vorhanden, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut Boolean ist.

- `name`

  - : Dieses Attribut ermöglicht die Verbindung mehrerer `<details>`-Elemente, bei denen jeweils nur eines geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Funktionen wie Akkordeons ohne Skripterstellung leicht zu erstellen.

    Das `name`-Attribut gibt einen Gruppennamen an — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines Elements führt dazu, dass ein anderes schließt. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut zugewiesen wird, wird nur das erste in der Quellreihenfolge als geöffnet dargestellt.

    > **Hinweis:** `<details>`-Elemente müssen nicht direkt nebeneinander im Quellcode platziert werden, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wenn sein Zustand zwischen geöffnet und geschlossen wechselt. Es wird _nach_ der Zustandsänderung gesendet, obwohl wenn sich der Zustand mehrfach ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget den Zustand wechselt:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## Beispiele

### Ein grundlegendes Disclosure-Beispiel

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### Erstellen einer offenen Disclosure-Box

Um die `<details>`-Box im geöffneten Zustand zu starten, fügen Sie das Boolean `open`-Attribut hinzu:

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Mehrere benannte Disclosure-Boxen

Wir fügen mehrere `<details>`-Boxen hinzu, die alle denselben Namen haben, sodass jeweils nur eine geöffnet sein kann:

```html
<details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Versuchen Sie, alle Disclosure-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich automatisch alle anderen.

### Anpassung des Erscheinungsbildes

Nun wenden wir einige CSS-Stile an, um das Erscheinungsbild der Disclosure-Box anzupassen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details:open > summary {
  background-color: #ccf;
}
```

Dieses CSS erzeugt eine Darstellung, die einer Registerkarten-Oberfläche ähnelt: Wenn Sie auf die Registerkarte klicken, wird sie geöffnet, um ihren Inhalt preiszugeben.

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attribut-Selektor `details[open]` verwenden, um das `<details>`-Element im offenen Zustand zu stylen.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

Sehen Sie sich die Seite {{htmlelement("summary")}} für ein [Beispiel zur Anpassung des Disclosure-Widgets](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon) an.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endetags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("summary")}}
