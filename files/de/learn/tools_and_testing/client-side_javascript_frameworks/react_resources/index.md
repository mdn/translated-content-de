---
title: React-Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, mit denen Sie Ihre Lernreise weiter vertiefen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/die Kommandozeile</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Bereitstellung weiterer Ressourcen, um mehr über React zu lernen.</td>
    </tr>
  </tbody>
</table>

## Komponentenbasierte Stile

Während wir im Tutorial alle CSS in einer einzigen `index.css` Datei gehalten haben, ist es üblich, in React-Anwendungen pro Komponente eigene Stylesheets zu definieren. In einer durch Vite unterstützten Anwendung kann dies durch das Erstellen einer CSS-Datei und das Importieren in das entsprechende Komponentenmodul geschehen.

Zum Beispiel: Wir könnten eine dedizierte Datei `Form.css` erstellen, um das CSS des `<Form />`-Komponenten zu verwalten und die Stile dann in `Form.jsx` importieren, wie folgt:

```jsx
import Form from "./Form";
import "./Form.css";
```

Dieser Ansatz macht es einfach, das CSS zu identifizieren und zu verwalten, das zu einer bestimmten Komponente gehört, und es von den app-weiten Stilen zu unterscheiden. Es fragmentiert jedoch auch Ihr Stylesheet über den Code hinweg, und diese Fragmentierung könnte nicht lohnenswert sein. Bei größeren Anwendungen mit Hunderten von einzigartigen Ansichten und vielen beweglichen Teilen ergibt es Sinn, komponentenbasierte Stile zu verwenden, um die Menge an irrelevanten Code, den Sie an Ihre Benutzer senden, zu begrenzen.

Mehr darüber und andere Ansätze, React-Komponenten zu stylen, können Sie im Smashing Magazine Artikel [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/) lesen.

## Reakt-Entwicklertools

Wir haben `console.log()` verwendet, um den Zustand und die Props unserer Anwendung in diesem Tutorial zu überprüfen, und Sie haben auch einige der nützlichen Warnungen und Fehlermeldungen gesehen, die React Ihnen sowohl in der CLI als auch in der JavaScript-Konsole Ihres Browsers bietet. Aber es gibt noch mehr, was wir hier tun können.

Das React DevTools-Dienstprogramm ermöglicht es Ihnen, die Interna Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwicklertools Ihres Browsers ein neues Panel hinzu, das es Ihnen ermöglicht, den Zustand und die Props verschiedener Komponenten zu inspizieren und sogar den Zustand und die Props zu bearbeiten, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieser Screenshot zeigt unsere abgeschlossene Anwendung, wie sie in React DevTools erscheint:

![Unser Projekt wird in React Devtools angezeigt](react-devtools.png)

Links sehen wir alle Komponenten, die unsere Anwendung ausmachen, einschließlich einzigartiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Rechts sehen wir die Props und Hooks, die unsere App-Komponente verwendet. Beachten Sie auch, dass die Komponenten `Form`, `FilterButton` und `Todo` nach rechts eingerückt sind – dies zeigt an, dass `App` ihr übergeordnetes Element ist. Diese Ansicht ist großartig, um Eltern/Kinder-Beziehungen auf einen Blick zu verstehen und ist unschätzbar für das Verständnis komplexerer Apps.

React DevTools ist in verschiedenen Formen verfügbar:

- Eine [Chrome-Browsererweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox-Browsererweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge-Browsererweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [stand-alone Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Versuchen Sie, eine dieser Optionen zu installieren und verwenden Sie sie dann, um die App, die Sie gerade erstellt haben, zu inspizieren!

Sie können [mehr über React DevTools in der React-Dokumentation lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()`-Hook

In diesem Tutorial haben wir den `useState()`-Hook verwendet, um den Zustand über eine kleine Sammlung von Ereignishandlerfunktionen hinweg zu verwalten. Das war für Lernzwecke in Ordnung, aber es ließ unsere Zustandsverwaltungslogik an die Ereignis-Handler unserer Komponente gebunden – insbesondere an die des `<Todo />`-Komponenten.

Der `useReducer()`-Hook bietet Entwicklern eine Möglichkeit, unterschiedliche, aber zusammenhängende Logik zur Zustandsverwaltung in eine einzige Funktion zu konsolidieren. Es ist etwas komplexer als `useState()`, aber es ist ein gutes Werkzeug, das Sie in Ihrem Repertoire haben sollten. Sie können [mehr über `useReducer()` in der React-Dokumentation lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Context-API

Die Anwendung, die wir in diesem Tutorial erstellt haben, nutzte Komponenten-Props, um Daten von ihrer `App`-Komponente an die benötigenden Kinderkomponenten weiterzugeben. Meistens sind Props eine geeignete Methode zur Datenweitergabe; für komplexe, tief verschachtelte Anwendungen sind sie jedoch nicht immer optimal.

React bietet die [Context-API](https://react.dev/learn/passing-data-deeply-with-context) als eine Möglichkeit, Daten an Komponenten bereitzustellen, die sie benötigen, _ohne_ Props den Komponentenbaum hinunterzugeben. Es gibt auch einen [useContext-Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Wenn Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [einführenden Artikel über React Context geschrieben](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/).

## Klassenkomponenten

Obwohl dieses Tutorial sie nicht erwähnt, ist es möglich, React-Komponenten mit [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden Klassenkomponenten genannt. Bis zur Einführung der Hooks waren Klassen die einzige Möglichkeit, Zustand in Komponenten zu bringen oder Seiteneffekte der Darstellung zu verwalten. Sie sind immer noch die einzige Möglichkeit, bestimmte Randfälle zu behandeln, und sie sind in älteren React-Projekten verbreitet. Die offizielle React-Dokumentation führt eine Referenz für die [`Component`](https://react.dev/reference/react/Component)-Basisklasse, empfiehlt jedoch die Verwendung von Hooks, um [Zustand](https://react.dev/learn/state-a-components-memory) und [Seiteneffekte](https://react.dev/learn/synchronizing-with-effects) zu verwalten.

## Testen

Bibliotheken wie die [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ermöglichen das Schreiben von Unit-Tests für React-Komponenten. Es gibt viele Möglichkeiten, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) baut auf Vite auf und ist ein großartiger Begleiter für Ihre Vite-gestützten React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routing

Obwohl Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Nutzers gehandhabt wird, ist es möglich, eine Webanwendung zu konfigurieren, um die Position des Browsers zu lesen und zu aktualisieren und bestimmte Benutzeroberflächen zu rendern. Dies wird _client-side-routing_ genannt. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste Client-side-Routing-Bibliothek für React. Sie erlaubt Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten mit diesen Routen zu verknüpfen. Es bietet außerdem eine Reihe nützlicher Hooks und Komponenten zum Verwalten der Position und des Verlaufs des Browsers.

> [!NOTE]
> Client-side-Routing kann Ihre Anwendung schnell erscheinen lassen, bringt jedoch eine Reihe von Zugänglichkeitsproblemen mit sich, insbesondere für Menschen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel, ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing), lesen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
