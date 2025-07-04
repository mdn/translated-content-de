---
title: "<details>: Das Details Disclosure-Element"
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

Das **`<details>`**-Element [HTML](/de/docs/Web/HTML) erzeugt ein Disclosure-Widget, in dem Informationen nur sichtbar sind, wenn das Widget in einen offenen Zustand umgeschaltet wird. Ein Zusammenfassungs- oder Beschriftungstext muss mit dem {{HTMLElement("summary")}}-Element bereitgestellt werden.

Ein Disclosure-Widget wird normalerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder verdreht), um den offenen/geschlossenen Zustand anzuzeigen, mit einer Beschriftung neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Beschriftung für das Disclosure-Widget verwendet. Der Inhalt von `<details>` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

Ein `<details>`-Widget kann in einem der beiden Zustände sein. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und die Beschriftung innerhalb von `<summary>` an (oder einen {{Glossary("user_agent", "User-Agent")}}-definierten Standardtext, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, „verdreht“ es sich und zeigt seinen Inhalt. Die verbreitete Verwendung eines Dreiecks, das sich dreht oder verdreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal als "Twisty" bezeichnet werden.

Sie können CSS verwenden, um das Disclosure-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine integrierte Möglichkeit, die Übergangsanimation zwischen geöffnetem und geschlossenem Zustand zu animieren.

Standardmäßig, wenn es geschlossen ist, ist das Widget nur so hoch, dass es das Disclosure-Dreieck und die Zusammenfassung anzeigt. Wenn es geöffnet ist, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies oder das {{cssxref("::marker")}}-Pseudo-Element verwenden, um das [Disclosure-Widget anzupassen](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `open`

  - : Dieses Boolesche Attribut zeigt an, ob die Details – das heißt, der Inhalt des `<details>`-Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig ist dieses Attribut nicht vorhanden, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut boolesch ist.

- `name`

  - : Dieses Attribut ermöglicht es, mehrere `<details>`-Elemente zu verbinden, wobei jeweils nur eines geöffnet sein kann. Dies ermöglicht Entwicklern die einfache Erstellung von UI-Features wie Akkordeons ohne Skripte.

    Das `name`-Attribut gibt einen Gruppennamen an – vergeben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein – das Öffnen eines wird ein anderes schließen. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut zugewiesen wird, wird nur das erste im Quelltext in geöffnetem Zustand dargestellt.

    > [!NOTE] > `<details>`-Elemente müssen nicht unmittelbar zueinander im Quelltext stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wann immer sich dessen Zustand zwischen geöffnet und geschlossen ändert. Es wird _nach_ dem Wechsel des Zustands gesendet, obwohl, wenn der Zustand sich mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignislistener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget den Zustand ändert:

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

### Ein einfaches Disclosure-Beispiel

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

### Erstellen eines offenen Disclosure-Kastens

Um den `<details>`-Kasten in seinem offenen Zustand zu starten, fügen Sie das boolesche `open`-Attribut hinzu:

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

### Mehrere benannte Disclosure-Kästen

Wir fügen mehrere `<details>`-Kästen hinzu, alle mit demselben Namen, sodass immer nur einer geöffnet sein kann:

```html
<details name="requirements">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="requirements">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="requirements">
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

Versuchen Sie, alle Disclosure-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Anpassung der Darstellung

Nun lassen Sie uns etwas CSS anwenden, um das Erscheinungsbild des Disclosure-Kastens anzupassen.

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

Dieses CSS kreiert ein Aussehen ähnlich einer Registerkartenoberfläche, bei der das Klicken auf die Registerkarte diese öffnet, um den Inhalt anzuzeigen.

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

Sehen Sie sich die {{htmlelement("summary")}}-Seite an für ein [Beispiel zur Anpassung des Disclosure-Widgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, Gliederungswurzel, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließendem Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
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
- {{cssxref("::details-content")}}
