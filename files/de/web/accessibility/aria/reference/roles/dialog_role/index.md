---
title: "ARIA: Rolle dialog"
short-title: dialog
slug: Web/Accessibility/ARIA/Reference/Roles/dialog_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `dialog` kennzeichnet ein HTML-basiertes Anwendungsdialogfeld oder Fenster, das Inhalte oder Bedienelemente vom Rest der Webanwendung oder Seite trennt. Dialogfelder werden in der Regel mithilfe einer Überlagerung über dem übrigen Seiteninhalt angezeigt. Sie können nicht modal sein (eine Interaktion mit Inhalten außerhalb des Dialogfelds ist weiterhin möglich) oder modal (nur mit den Inhalten im Dialogfeld kann interagiert werden).

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

## Beschreibung

Ein Dialogfeld ist ein dem Hauptfenster einer Webanwendung untergeordnetes Fenster. Bei HTML-Seiten ist das Hauptfenster der Anwendung das gesamte Webdokument, also das body-Element.

Wenn ein Element mit der Rolle `dialog` gekennzeichnet wird, können Hilfstechnologien erkennen, dass der Inhalt des Dialogfelds zusammengehört und vom übrigen Seiteninhalt getrennt ist. `role="dialog"` allein reicht jedoch nicht aus, um ein Dialogfeld barrierefrei zu machen. Darüber hinaus sind folgende Punkte wichtig:

- Es wird dringend empfohlen, das Dialogfeld mit einer Beschriftung zu versehen.
- Der Tastaturfokus muss korrekt verwaltet werden.

Die folgenden Abschnitte beschreiben diese beiden Aspekte der Barrierefreiheit von Dialogfeldern.

### Beschriftung

Auch wenn das Dialogfeld selbst nicht fokussierbar sein muss, wird dringend empfohlen, es mit einer Beschriftung zu versehen. Ein zugänglicher Name ist für die ARIA-Rolle `dialog` nicht vorgeschrieben. Die Beschriftung des Dialogfelds liefert Kontext für die interaktiven Steuerelemente darin. Anders ausgedrückt: Die Beschriftung des Dialogfelds dient als Gruppenbeschriftung für seine Steuerelemente – ähnlich wie ein `<legend>`-Element die Steuerelemente innerhalb eines `<fieldset>`-Elements als Gruppe beschriftet.

Wenn ein Dialogfeld bereits eine sichtbare Titelleiste hat, kann deren Text als Beschriftung für das Dialogfeld verwendet werden. Am besten geschieht dies mit dem Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) am Element mit `role="dialog"`. Enthält das Dialogfeld neben dem Titel weiteren beschreibenden Text, kann dieser außerdem über das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit dem Dialogfeld verknüpft werden. Der folgende Codeausschnitt zeigt diesen Ansatz:

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

> [!NOTE]
> Titel und Beschreibung eines Dialogfelds müssen nicht fokussierbar sein, damit Screenreader sie in einem nicht virtuellen Modus wahrnehmen können. Die Kombination aus der ARIA-Rolle `dialog` und den Beschriftungstechniken sollte dafür sorgen, dass der Screenreader die Informationen zum Dialogfeld ansagt, wenn der Fokus hineinbewegt wird.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um das Dialogfeld zu beschriften. Häufig ist der Wert des Attributs `aria-labelledby` die id des Elements, das den Titel des Dialogfelds enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um den Inhalt des Dialogfelds zu beschreiben.

### Erforderliche JavaScript-Funktionen

#### Fokusverwaltung

Für die Verwaltung des Tastaturfokus in einem Dialogfeld gelten besondere Anforderungen:

- Dialogfelder sollten immer mindestens ein fokussierbares Steuerelement enthalten. In vielen Dialogfeldern ist dies eine Schaltfläche wie „Schließen“, „OK“ oder „Abbrechen“. Neben dem erforderlichen Steuerelement können Dialogfelder beliebig viele weitere fokussierbare Elemente enthalten, auch ganze Formulare oder andere Container-Widgets wie Tabs.
- Wenn das Dialogfeld erscheint, sollte der Tastaturfokus auf das standardmäßig zu fokussierende Steuerelement im Dialogfeld verschoben werden. Welches das ist, hängt vom Zweck des Dialogfelds ab. Bei einem Dialogfeld mit einer einfachen Meldung kann es eine „OK“-Schaltfläche sein; bei einem Dialogfeld mit einem Formular das erste Formularfeld.
- Nach dem Schließen des Dialogfelds sollte der Tastaturfokus an die Stelle zurückkehren, an der er sich vor dem Wechsel in das Dialogfeld befand. Andernfalls kann der Fokus an den Anfang der Seite springen.
- Bei den meisten Dialogfeldern wird erwartet, dass die Tab-Reihenfolge innerhalb des Dialogfelds _umlaufend_ ist: Wenn Benutzer mit der Tabulatortaste durch die fokussierbaren Elemente des Dialogfelds navigieren, wird nach dem letzten Element wieder das erste fokussiert. Die Tab-Reihenfolge sollte also auf das Dialogfeld beschränkt bleiben.
- Wenn das Dialogfeld verschoben oder in der Größe verändert werden kann, stellen Sie sicher, dass dies sowohl per Tastatur als auch mit der Maus möglich ist. Bietet ein Dialogfeld besondere Funktionen wie Symbolleisten oder Kontextmenüs, müssen diese für Tastaturnutzer ebenfalls erreichbar und bedienbar sein.
- Dialogfelder können modal oder nicht modal sein. Wenn ein _modales_ Dialogfeld angezeigt wird, ist keine Interaktion mit Seiteninhalten außerhalb des Dialogfelds möglich. Die Hauptoberfläche der Anwendung beziehungsweise der Seiteninhalt gilt also als vorübergehend deaktiviert, solange das modale Dialogfeld sichtbar ist. Bei _nicht modalen_ Dialogfeldern ist die Interaktion mit Inhalten außerhalb des Dialogfelds weiterhin möglich. Beachten Sie, dass für nicht modale Dialogfelder eine globale Tastenkombination erforderlich ist, mit der sich der Fokus zwischen geöffneten Dialogfeldern und der Hauptseite verschieben lässt.

### Mögliche Auswirkungen auf User Agents und Hilfstechnologien

Wenn die Rolle `dialog` verwendet wird, sollte der User Agent Folgendes tun:

- Das Element in der Barrierefreiheits-API des Betriebssystems als Dialogfeld bereitstellen.

Wenn das Dialogfeld korrekt beschriftet ist und der Fokus auf ein Element darin verschoben wird – häufig auf ein interaktives Element wie eine Schaltfläche –, sollten Screenreader die zugängliche Rolle, den Namen und gegebenenfalls die Beschreibung des Dialogfelds sowie das fokussierte Element ansagen.

> [!NOTE]
> Die Meinungen darüber, wie Hilfstechnologien mit dieser Technik umgehen sollten, können auseinandergehen. Auch die Reihenfolge der Ansagen kann je nach verwendeter Hilfstechnologie variieren. Die obigen Angaben geben eine dieser Auffassungen wieder und können sich ändern, während die Spezifikation festgelegt wird.

## Beispiele

### Ein Dialogfeld mit einem Formular

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Subscription Form</h2>
  <p id="dialog1Desc">We will not share this information with third parties.</p>
  <form>
    <p>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">Interests</label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <input type="checkbox" id="autoLogin" name="autoLogin" />
      <label for="autoLogin">Auto-login?</label>
    </p>
    <p>
      <input type="submit" value="Save Information" />
    </p>
  </form>
</div>
```

#### Funktionsfähige Beispiele

- [jQuery-UI-Dialogfeld](https://jqueryui.com/dialog/)

### Hinweise

> [!NOTE]
> Auch wenn sich verhindern lässt, dass Tastaturnutzer den Fokus auf Elemente außerhalb des Dialogfelds verschieben, können Screenreader-Nutzer diese Inhalte möglicherweise weiterhin mit dem virtuellen Cursor ihres Screenreaders erreichen.
> Entwickler müssen sicherstellen, dass Inhalte außerhalb des modalen Dialogfelds für alle Nutzer unzugänglich sind, solange es aktiv ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: Rolle `alertdialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'The HTML <code>&lt;dialog&gt;</code> element')}}
