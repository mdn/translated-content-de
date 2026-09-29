---
title: "ARIA: dialog-Rolle"
short-title: dialog
slug: Web/Accessibility/ARIA/Reference/Roles/dialog_role
l10n:
  sourceCommit: 705109e85b6c5a9142260c58a617ef295b3b1316
---

Die Rolle `dialog` wird verwendet, um einen HTML-basierten Anwendungsdialog oder ein Fenster zu kennzeichnen, das Inhalte oder Bedienelemente vom Rest der Webanwendung oder Seite trennt. Dialoge werden in der Regel mithilfe eines Overlays über dem übrigen Seiteninhalt angezeigt. Sie können entweder nicht modal sein (eine Interaktion mit Inhalten außerhalb des Dialogs ist weiterhin möglich) oder modal (nur mit den Inhalten im Dialog kann interagiert werden).

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

Ein Dialog ist ein dem Hauptfenster einer Webanwendung untergeordnetes Fenster. Bei HTML-Seiten ist das Hauptfenster der Anwendung das gesamte Webdokument, also das `body`-Element.

Wenn ein Dialogelement mit der Rolle `dialog` gekennzeichnet wird, können assistive Technologien seinen Inhalt als zusammengehörig und vom übrigen Seiteninhalt getrennt erkennen. `role="dialog"` allein reicht jedoch nicht aus, um einen Dialog barrierefrei zu machen. Zusätzlich sind folgende Punkte wichtig:

- Es wird dringend empfohlen, den Dialog mit einer Beschriftung zu versehen.
- Der Tastaturfokus muss korrekt verwaltet werden.

Die folgenden Abschnitte beschreiben diese beiden Aspekte der Barrierefreiheit von Dialogen.

### Beschriftung

Auch wenn der Dialog selbst keinen Fokus erhalten können muss, wird dringend empfohlen, ihn mit einer Beschriftung zu versehen. Ein barrierefreier Name ist für die ARIA-Rolle `dialog` nicht vorgeschrieben. Die Beschriftung des Dialogs liefert Kontextinformationen für die interaktiven Steuerelemente darin. Anders ausgedrückt: Sie dient als Gruppenbeschriftung für diese Steuerelemente – ähnlich wie ein `<legend>`-Element die Steuerelemente innerhalb eines `<fieldset>`-Elements als Gruppe beschriftet.

Wenn der Dialog bereits eine sichtbare Titelleiste hat, kann deren Text als Beschriftung für den Dialog verwendet werden. Am besten wird dazu das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) am Element mit `role="dialog"` verwendet. Enthält der Dialog neben seinem Titel zusätzlichen beschreibenden Text, kann dieser über das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit dem Dialog verknüpft werden. Der folgende Codeausschnitt zeigt diesen Ansatz:

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
> Beachten Sie, dass Titel und Beschreibung eines Dialogs keinen Fokus erhalten können müssen, damit Screenreader sie im nicht virtuellen Modus erfassen können. Durch die Kombination der ARIA-Rolle `dialog` mit den Beschriftungstechniken sollte der Screenreader die Informationen zum Dialog vorlesen, wenn der Fokus in den Dialog verschoben wird.

### Erforderliche JavaScript-Funktionen

#### Fokusverwaltung

Für die Verwaltung des Tastaturfokus in einem Dialog gelten besondere Anforderungen:

- Dialoge sollten immer mindestens ein fokussierbares Steuerelement enthalten. In vielen Dialogen ist das eine Schaltfläche wie „Schließen“, „OK“ oder „Abbrechen“. Darüber hinaus können Dialoge beliebig viele fokussierbare Elemente enthalten, auch ganze Formulare oder andere Container-Widgets wie Tabs.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte der Tastaturfokus auf das standardmäßig vorgesehene fokussierbare Steuerelement im Dialog verschoben werden. Welches Steuerelement das ist, hängt vom Zweck des Dialogs ab. Bei Dialogen, die nur eine einfache Meldung anzeigen, kann es eine „OK“-Schaltfläche sein. Bei Dialogen mit einem Formular kann es das erste Feld des Formulars sein.
- Nach dem Schließen des Dialogs sollte der Tastaturfokus dorthin zurückkehren, wo er sich vor dem Wechsel in den Dialog befand. Andernfalls kann der Fokus an den Anfang der Seite zurückfallen.
- Bei den meisten Dialogen wird erwartet, dass die Tab-Reihenfolge im Dialog _umlaufend_ ist: Wenn Sie mit der Tab-Taste durch die fokussierbaren Elemente im Dialog navigieren, erhält nach dem letzten Element wieder das erste den Fokus. Die Tab-Reihenfolge sollte also auf den Dialog beschränkt bleiben.
- Wenn sich der Dialog verschieben oder in der Größe ändern lässt, müssen diese Aktionen sowohl mit der Tastatur als auch mit der Maus möglich sein. Bietet ein Dialog besondere Funktionen wie Symbolleisten oder Kontextmenüs, müssen diese ebenfalls per Tastatur erreichbar und bedienbar sein.
- Dialoge können modal oder nicht modal sein. Wenn ein _modaler_ Dialog angezeigt wird, ist keine Interaktion mit Seiteninhalten außerhalb des Dialogs möglich. Die Benutzeroberfläche der Hauptanwendung beziehungsweise der übrige Seiteninhalt gilt also als vorübergehend deaktiviert, solange der modale Dialog angezeigt wird. Bei _nicht modalen_ Dialogen ist die Interaktion mit Inhalten außerhalb des Dialogs weiterhin möglich. Für nicht modale Dialoge muss es ein globales Tastenkürzel geben, mit dem sich der Fokus zwischen geöffneten Dialogen und der Hauptseite verschieben lässt.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Häufig ist der Wert des Attributs `aria-labelledby` die ID des Elements, das den Dialogtitel enthält.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um den Inhalt des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf User Agents und assistive Technologien

Wenn die Rolle `dialog` verwendet wird, sollte der User Agent Folgendes tun:

- Das Element in der Barrierefreiheits-API des Betriebssystems als Dialog bereitstellen.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element innerhalb des Dialogs verschoben wird – häufig auf ein interaktives Element wie eine Schaltfläche –, sollten Screenreader die barrierefreie Rolle und den Namen des Dialogs sowie gegebenenfalls seine Beschreibung vorlesen. Außerdem sollten sie das fokussierte Element ankündigen.

> [!NOTE]
> Die Ansichten darüber, wie assistive Technologien mit dieser Technik umgehen sollten, können auseinandergehen. Auch die Reihenfolge der Ankündigungen kann je nach verwendeter assistiver Technologie variieren. Die obigen Angaben stellen eine dieser Ansichten dar und können sich im Zuge der Festlegung der Spezifikation ändern.

## Beispiele

### Ein Dialog mit einem Formular

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

- [jQuery-UI-Dialog](https://jqueryui.com/dialog/)

### Hinweise

> [!NOTE]
> Auch wenn verhindert werden kann, dass Personen, die eine Tastatur verwenden, den Fokus auf Elemente außerhalb des Dialogs verschieben, können Personen, die einen Screenreader verwenden, möglicherweise weiterhin mit dessen virtuellem Cursor zu diesen Inhalten navigieren.
> Entwickler sollten sicherstellen, dass Inhalte außerhalb eines modalen Dialogs für alle Benutzer unzugänglich sind, solange der Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: alertdialog-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'The HTML <code>&lt;dialog&gt;</code> element')}}
