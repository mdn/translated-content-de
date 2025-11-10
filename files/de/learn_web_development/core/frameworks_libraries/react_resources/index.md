---
title: React-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/React_resources
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Wissen zu vertiefen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Vertrautheit mit weiteren Ressourcen, um mehr über React zu erfahren.</td>
    </tr>
  </tbody>
</table>

## Komponenten-spezifische Styles

Während wir alle CSS für unser Tutorial in einer einzigen `index.css`-Datei gehalten haben, ist es in React-Anwendungen üblich, für jede Komponente eigene Stylesheets zu definieren. In einer Anwendung auf Basis von Vite kann dies durch das Erstellen einer CSS-Datei und deren Import in das zugehörige Komponenten-Modul erfolgen.

Zum Beispiel könnten wir eine eigene `Form.css`-Datei erstellen, um das CSS zu verwalten, das sich auf die `<Form />` Komponente bezieht, und dann die Styles in `Form.jsx` importieren, so:

```jsx
import Form from "./Form";
import "./Form.css";
```

Diese Methode macht es einfach, das CSS zu identifizieren und zu verwalten, das zu einer bestimmten Komponente gehört, und es von den app-weiten Styles zu unterscheiden. Sie fragmentiert jedoch auch Ihr Stylesheet über Ihren Code hinweg, und diese Fragmentierung könnte sich möglicherweise nicht lohnen. Für größere Anwendungen mit Hunderten einzigartiger Ansichten und vielen beweglichen Teilen macht es Sinn, komponenten-spezifische Styles zu verwenden, um die Menge an irrelevanten Code zu reduzieren, der zu einem bestimmten Zeitpunkt an den Nutzer gesendet wird.

Sie können mehr darüber und andere Ansätze zur Gestaltung von React-Komponenten im Smashing Magazine-Artikel [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/) lesen.

## React DevTools

In diesem Tutorial haben wir `console.log()` verwendet, um den Status und die Requisiten unserer Anwendung zu überprüfen, und Sie haben auch einige der nützlichen Warnungen und Fehlermeldungen gesehen, die React Ihnen sowohl in der CLI als auch in der JavaScript-Konsole Ihres Browsers gibt. Aber es gibt noch mehr, was wir hier tun können.

Das React DevTools-Tool erlaubt es Ihnen, die internen Bestandteile Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwicklertools Ihres Browsers ein neues Panel hinzu, mit dem Sie den Status und die Requisiten verschiedener Komponenten inspizieren und sogar Status und Requisiten bearbeiten können, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieses Screenshot zeigt unsere fertige Anwendung, wie sie in den React DevTools erscheint:

![Unser Projekt, das in den React DevTools angezeigt wird](react-devtools.png)

Links sehen wir alle Komponenten, aus denen unsere Anwendung besteht, einschließlich einzigartiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Rechts sehen wir die Requisiten und Hooks, die unsere App-Komponente verwendet. Beachten Sie auch, dass die `Form`, `FilterButton` und `Todo`-Komponenten nach rechts eingerückt sind - das zeigt an, dass `App` ihr Parent ist. Diese Ansicht ist ideal, um Eltern-Kind-Beziehungen auf einen Blick zu verstehen und ist unverzichtbar, um komplexere Anwendungen zu verstehen.

React DevTools ist in mehreren Formen verfügbar:

- Eine [Chrome-Browser-Erweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox-Browser-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge-Browser-Erweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [standalone Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Versuchen Sie, eine dieser Optionen zu installieren und verwenden Sie sie, um die App zu inspizieren, die Sie gerade erstellt haben!

Sie können [mehr über React DevTools in der React-Dokumentation lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()`-Hook

In diesem Tutorial haben wir den `useState()`-Hook verwendet, um den Status über eine kleine Sammlung von Ereignis-Handler-Funktionen hinweg zu verwalten. Das war für Lernzwecke in Ordnung, aber es hat unsere Logik zur Statusverwaltung an die Ereignis-Handler unserer Komponente gebunden – insbesondere die des `<Todo />`-Komponenten.

Der `useReducer()`-Hook bietet Entwicklern eine Möglichkeit, unterschiedliche, aber verwandte Logik zur Statusverwaltung in einer einzigen Funktion zu konsolidieren. Er ist etwas komplexer als `useState()`, aber er ist ein gutes Werkzeug, das man in seinem Repertoire haben sollte. Sie können [mehr über `useReducer()` in der React-Dokumentation lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Context-API

Die Anwendung, die wir in diesem Tutorial erstellt haben, nutzte Komponenten-Requisiten, um Daten von der `App`-Komponente zu den Kindkomponenten zu übergeben, die sie benötigten. Meistens sind Requisiten eine geeignete Methode zum Teilen von Daten; für komplexe, tief geschachtelte Anwendungen sind sie jedoch nicht immer die beste Wahl.

React bietet die [Context API](https://react.dev/learn/passing-data-deeply-with-context) als eine Möglichkeit an, Daten an benötigende Komponenten bereitzustellen, _ohne_ Requisiten durch den Komponentenbaum hindurch zu geben. Es gibt auch einen [useContext-Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Falls Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [Einführungsartikel über die React Context API](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) geschrieben.

## Klassenkomponenten

Obwohl dieses Tutorial sie nicht erwähnt, ist es möglich, React-Komponenten mithilfe von [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden als Klassenkomponenten bezeichnet. Bis zur Einführung der Hooks waren Klassen die einzige Möglichkeit, Status in Komponenten einzubringen oder Rendering-Nebeneffekte zu verwalten. Sie sind immer noch die einzige Möglichkeit, um bestimmte Randfälle zu behandeln, und sie sind in älteren React-Projekten üblich. Die offiziellen React-Dokumente enthalten eine Referenz für die [`Component`](https://react.dev/reference/react/Component) Basisklasse, empfehlen jedoch die Verwendung von Hooks, um [Status](https://react.dev/learn/state-a-components-memory) und [Nebeneffekte](https://react.dev/learn/synchronizing-with-effects) zu verwalten.

## Testen

Bibliotheken wie [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) machen es möglich, Unit-Tests für React-Komponenten zu schreiben. Es gibt viele Möglichkeiten, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) baut auf Vite auf und ist ein großartiger Begleiter für Ihre Vite-gestützten React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routing

Obwohl das Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Benutzers gehandhabt wird, ist es möglich, eine Webanwendung so zu konfigurieren, dass sie die Position des Browsers liest und aktualisiert und bestimmte Benutzeroberflächen rendert. Dies wird als _Client-seitiges Routing_ bezeichnet. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste Client-seitige Routing-Bibliothek für React. Sie ermöglicht es Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten mit diesen Routen zu verknüpfen. Außerdem bietet sie eine Reihe nützlicher Hooks und Komponenten, um die Position des Browsers und den Verlauf zu verwalten.

> [!NOTE]
> Client-seitiges Routing kann Ihre Anwendung schnell erscheinen lassen, birgt jedoch eine Reihe von Zugänglichkeitsproblemen, insbesondere für Personen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing) lesen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
