---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen mit der Erstellung einer Komponente, die jedes Element auf der To-Do-Liste darstellt. Dabei lernen wir einige wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an diese über Props und das Speichern des Datenstatus.

> [!NOTE]
> Falls Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Codes der Vue-App in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine live laufende Version, siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben,
          die die Daten der App verwalten, und einer auf HTML basierenden Templating-Syntax,
          die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige
          der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen),
          benötigen Sie ein Terminal mit
          <a
            href="https://nodejs.org/en/download"
            rel="noopener noreferrer"
            target="_blank"
            >Node</a>
          >
          und
          <a
            href="https://www.npmjs.com/get-npm"
            rel="noopener noreferrer"
            target="_blank"
            >npm</a>
          >
          installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Vue-Komponente erstellt, sie innerhalb einer anderen
        Komponente rendert, Daten über Props in sie einfügt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigt. Wir werden dies nutzen, um unsere To-Do-Liste aufzubauen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Vorlagenabschnitt der Komponente, indem Sie `<template></template>` oben in die Datei hinzufügen.
3. Erstellen Sie einen `<script></script>` Abschnitt unterhalb Ihres Vorlagenabschnitts. Fügen Sie innerhalb der `<script>` Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, welches Ihr Komponentenobjekt ist.

Ihre Datei sollte nun wie folgt aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun damit beginnen, tatsächliche Inhalte zu unserem `ToDoItem` hinzuzufügen. Vue-Vorlagen erlauben derzeit nur ein einziges Stamm-Element – ein Element muss alles innerhalb des Vorlagenabschnitts umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden hierfür ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) als Stamm-Element.

1. Fügen Sie jetzt ein leeres `<div>` in Ihre Komponentenvorlage ein.
2. Lassen Sie uns in diesem `<div>` eine Checkbox und ein zugehöriges Label hinzufügen. Fügen Sie der Checkbox eine `id` hinzu und ein `for` Attribut, welches die Checkbox mit dem Label verknüpft, wie unten dargestellt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwenden von TodoItem innerhalb unserer App

Das alles ist gut, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, daher gibt es keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt tun.

1. Öffnen Sie erneut `App.vue`.
2. Fügen Sie oben im `<script>` Tag Folgendes hinzu, um Ihre `ToDoItem` Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie innerhalb Ihres Komponentenobjekts die Eigenschaft `components` hinzu und registrieren Sie darin Ihre `ToDoItem` Komponente.

Der Inhalt Ihres `<script>` sollte jetzt ungefähr so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist die gleiche Vorgehensweise, mit der die `HelloWorld` Komponente vorher vom Vue CLI registriert wurde.

Um die `ToDoItem` Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>` Element gehen und sie als `<to-do-item></to-do-item>` Element aufrufen. Beachten Sie, dass der Dateiname der Komponente und ihre Darstellung in JavaScript in PascalCase ist (z.B. `ToDoList`), und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "kebab-case")}} (z.B. `<to-do-list>`). Es ist notwendig, diesen Schreibstil zu verwenden, wenn Sie Vue-Vorlagen [direkt im DOM](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Unterhalb des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), erstellen Sie eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)), die ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)) enthält.
2. Fügen Sie in das Listenelement `<to-do-item></to-do-item>` ein.

Der `<template>` Abschnitt Ihrer `App.vue` Datei sollte nun ungefähr so aussehen:

```vue
<div id="app">
  <h1>To-Do List</h1>
  <ul>
    <li>
      <to-do-item></to-do-item>
    </li>
  </ul>
</div>
```

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie nun Ihr gerendertes `ToDoItem` sehen, das aus einer Checkbox und einem Label besteht.

![Der aktuelle Rendering-Zustand der App, der einen Titel der Aufgabenliste und eine einzelne Checkbox und Beschriftung enthält](rendered-todoitem.png)

## Komponenten dynamisch mit Props machen

Unsere `ToDoItem` Komponente ist immer noch nicht sehr nützlich, da wir sie nur einmal auf einer Seite verwenden könnten (IDs müssen einzigartig sein), und wir haben keine Möglichkeit, den Beschriftungstext einzustellen. Nichts davon ist dynamisch.

Was wir brauchen, ist eine gewisse Komponentenstatus. Dies kann erreicht werden, indem Props zu unserer Komponente hinzugefügt werden. Sie können Props ähnlich wie Eingaben in einer Funktion betrachten. Der Wert einer Prop gibt Komponenten einen anfänglichen Zustand, der deren Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als ein Array von Strings aufzulisten. Jedes Element im Array entspricht dem Namen einer Prop.
- Die zweite Möglichkeit besteht darin, Props als ein Objekt zu definieren, wobei jeder Schlüssel dem Namen der Prop entspricht. Das Auflisten von Props als Objekt erlaubt es Ihnen, Standardwerte festzulegen, Props als erforderlich zu kennzeichnen, einfaches Objekttyping (speziell im Zusammenhang mit JavaScript primitiven Typen) zu implementieren und eine einfache Prop-Validierung durchzuführen.

> [!NOTE]
> Die Prop-Validierung erfolgt nur im Entwicklungsmodus, sodass Sie sich in der Produktion nicht strikt darauf verlassen können. Außerdem werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, so dass sie keinen Zugriff auf den Zustand der Komponente (oder andere Props) haben.

Für diese Komponente verwenden wir die Objekt-Registrierungsmethode.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue` Datei.
2. Fügen Sie eine `props` Eigenschaft innerhalb des exportierten `default {}` Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie innerhalb dieses Objekts zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des `label` Schlüssels sollte ein Objekt mit 2 Eigenschaften sein (oder **Props**, wie sie im Kontext der Verfügbarkeitskomponenten genannt werden).
   1. Die erste ist eine `required` Eigenschaft, die einen Wert von `true` haben wird. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein label-Feld hat. Vue wird uns warnen, wenn eine `ToDoItem` Komponente kein label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type` Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als JavaScript `String` Typ (achten Sie auf das große "S"). Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zur `done` Prop.
   1. Fügen Sie zuerst ein `default` Feld hinzu, mit einem Wert von `false`. Dies bedeutet, dass wenn kein `done` Prop an eine `ToDoItem` Komponente übergeben wird, das `done` Prop den Wert false haben wird (beachten Sie, dass dies nicht erforderlich ist — wir benötigen `default` nur bei nicht erforderlichen Props).
   2. Fügen Sie als Nächstes ein `type` Feld mit einem Wert von `Boolean` hinzu. Dies teilt Vue mit, dass wir erwarten, dass das Wert-Prop ein JavaScript boolean Typ ist.

Ihr Komponentenobjekt sollte nun so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwenden von registrierten Props

Mit diesen Props, die innerhalb des Komponentenobjekts definiert sind, können wir diese Variablenwerte nun innerhalb unserer Vorlage verwenden. Lassen Sie uns beginnen, indem wir das `label` Prop zur Komponentenvorlage hinzufügen.

Ersetzen Sie innerhalb Ihres `<template>` die Inhalte des `<label>` Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Vorlagensyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken anzuzeigen, die in unserer Klasse definiert sind, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall drucken wir den Wert des `label` Props aus.

Der Vorlagenabschnitt Ihrer Komponente sollte nun so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie werden sehen, dass das To-Do-Element wie zuvor gerendert wird, jedoch ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie werden eine Warnung sehen, die in etwa so aussieht:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderliches Prop markiert haben, aber wir haben der Komponente nie dieses Prop übergeben – wir haben definiert, wo innerhalb der Vorlage wir es verwenden möchten, aber wir haben es nicht in die Komponente eingefügt, als wir sie aufgerufen haben. Lassen Sie uns das beheben.

Fügen Sie innerhalb Ihrer `App.vue` Datei ein `label` Prop zum `<to-do-item></to-do-item>` Element hinzu, ganz wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt sehen Sie das Label in Ihrer App, und die Warnung wird nicht erneut im Konsolenfenster ausgegeben.

Das sind also Props im Wesentlichen. Als Nächstes gehen wir darauf ein, wie Vue den Datenstatus beibehält.

## Vue's Datenobjekt

Wenn Sie den Wert des `label` Prop, das an das `<to-do-item></to-do-item>` Element in Ihrer `App` Komponente übergeben wird, ändern, sollten Sie sehen, wie es sich aktualisiert. Das ist großartig. Wir haben eine Checkbox mit einem aktualisierbaren Label. Allerdings machen wir momentan nichts mit dem "done" Prop — wir können die Checkboxen in der Benutzeroberfläche aktivieren, aber nirgendwo in der App wird festgehalten, ob ein To-Do-Element tatsächlich erledigt ist.

Um dies zu erreichen, wollen wir das `done` Prop der Komponente an das `checked` Attribut des [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Elements binden, sodass es als Aufzeichnung dafür dienen kann, ob das Kästchen markiert wurde oder nicht. Allerdings ist es wichtig, dass Props als einseitige Datenbindung fungieren — eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Dafür gibt es viele Gründe. Komponenten, die Props bearbeiten, können das Debuggen zu einer Herausforderung machen. Wenn ein Wert an mehrere Kinder weitergegeben wird, könnte es schwierig sein, nachzuverfolgen, wo die Änderungen an diesem Wert herkommen. Darüber hinaus kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Das mutierende Props in einer Komponente würde das erneute Rendern der Komponente auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done` Zustand mithilfe der `data` Eigenschaft von Vue verwalten. Die `data` Eigenschaft ist der Ort, an dem Sie lokalen Zustand in einer Komponente verwalten können. Sie befindet sich innerhalb des Komponentenobjekts neben der `props` Eigenschaft und hat die folgende Struktur:

```js
export default {
  // …
  data() {
    return {
      key: value,
    };
  },
  // …
};
```

Sie werden bemerken, dass die `data` Eigenschaft eine Funktion ist. Dies geschieht, um die Datenwerte für jede Instanz einer Komponente zur Laufzeit einzigartig zu halten — die Funktion wird separat für jede Komponenteninstanz aufgerufen. Wenn Sie Daten nur als Objekt deklarieren würden, würden alle Instanzen dieser Komponente die gleichen Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert und etwas, das Sie nicht möchten.

Sie verwenden `this`, um auf eine Komponente's Props und andere Eigenschaften von innerhalb der Datenfunktion zuzugreifen, wie Sie vielleicht erwarten. Wir werden gleich ein Beispiel dafür sehen.

> [!NOTE]
> Aufgrund der Funktionsweise von `this` in Pfeilfunktionen (Bindung zum Kontext des Parents), könnten Sie nicht auf die notwendigen Attribute von innerhalb `data` zugreifen, wenn Sie eine Pfeilfunktion verwenden würden. Verwenden Sie also keine Pfeilfunktion für die `data` Eigenschaft.

Fügen wir also eine `data` Eigenschaft zu unserer `ToDoItem` Komponente hinzu. Diese wird ein Objekt zurückgeben, das eine einzelne Eigenschaft enthält, die wir `isDone` nennen werden, dessen Wert `this.done` ist.

Aktualisieren Sie das Komponentenobjekt so:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
};
```

Vue macht hier ein wenig Magie — es bindet all Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, das Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Dies dient zum Teil dazu, sie Ihrer Vorlage verfügbar zu machen. Der Nachteil davon ist, dass Sie die Schlüssel einzigartig über diese Attribute hinweg halten müssen. Dies ist der Grund, warum wir unser `data` Attribut `isDone` statt `done` genannt haben.

Jetzt müssen wir die `isDone` Eigenschaft an unsere Komponente binden. In ähnlicher Weise, wie Vue `\{{}}` Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Vorlagen anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und Komponenten zu binden: **`v-bind`**. Der `v-bind` Ausdruck sieht wie folgt aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie präfixen das Attribut/Prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Abkürzung für die `v-bind` Eigenschaft verwenden, indem Sie das Attribut/Prop einfach mit einem Doppelpunkt präfixen. Also `:attribute="expression"` funktioniert genauso wie `v-bind:attribute="expression"`.

Im Falle der Checkbox in unserer `ToDoItem` Komponente können wir `v-bind` verwenden, um die `isDone` Eigenschaft an das `checked` Attribut des `<input>` Elements zu binden. Beide der folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie sind frei, welches Muster Sie möchten, zu verwenden. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzsyntax häufiger verwendet wird, wird dieses Tutorial bei diesem Muster bleiben.

Also lass uns das tun. Aktualisieren Sie Ihr `<input>` Element jetzt, um `:checked="isDone"` einzuschließen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` zum `ToDoItem` Aufruf in `App.vue` hinzufügen. Beachten Sie, dass Sie die `v-bind` Syntax verwenden müssen, da sonst `true` als String übergeben wird. Die angezeigte Checkbox sollte angekreuzt sein.

```vue
<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item" :done="true"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

Versuchen Sie, `true` auf `false` zu ändern und zurück, indem Sie jedes Mal die App neu laden, um zu sehen, wie sich der Zustand ändert.

## Todos eine eindeutige ID geben

Großartig! Wir haben jetzt eine funktionierende Checkbox, bei der wir den Zustand programmatisch setzen können. Allerdings können wir derzeit nur eine `ToDoList` Komponente auf der Seite hinzufügen, da die `id` fest codiert ist. Dies würde zu Fehlern bei Hilfstechnologien führen, da die `id` benötigt wird, um Labels korrekt Kästchen zuzuordnen. Um dies zu beheben, können wir das `id` programmatisch im Komponentendaten festlegen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um eine eindeutige Zeichenfolge zu generieren, um Komponenten `id`s einzigartig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, die Einzigartigkeit zu gewährleisten, ohne auf externe Bibliotheken angewiesen zu sein.

Fügen Sie als Nächstes ein `id` Feld zur `data` Eigenschaft hinzu wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenfolge zurückzugeben, die wir dann mit `todo-` voranstellen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
      id: `todo-${crypto.randomUUID()}`,
    };
  },
};
```

Binden Sie als Nächstes die `id` an sowohl das `id` Attribut unserer Checkbox als auch an das `for` Attribut des labels, indem Sie die bestehenden `id` und `for` Attribute wie folgt aktualisieren:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war es für diesen Artikel. An diesem Punkt haben wir eine sauber funktionierende `ToDoItem` Komponente, die ein Label zum Anzeigen übergeben kann, ihren markierten Zustand speichern wird und mit einer eindeutigen `id` gerendert wird, jedes Mal, wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend mehr `<to-do-item></to-do-item>` Aufrufe in `App.vue` hinzufügen und dann deren gerenderten Output mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem` Komponenten zu unserer App hinzuzufügen. In unserem nächsten Artikel werden wir uns damit befassen, eine Reihe von To-Do-Elementdaten zu unserer `App.vue` Komponente hinzuzufügen, die wir dann mit der `v-for` Direktive durchlaufen und innerhalb der `ToDoItem` Komponenten anzeigen werden.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
