---
title: React-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/React_resources
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen weiter voranzutreiben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Vertrautheit mit weiteren Ressourcen, um mehr über React zu lernen.</td>
    </tr>
  </tbody>
</table>

## Komponentenbasierte Stile

Während wir alle CSS für unser Tutorial in einer einzigen `index.css`-Datei gehalten haben, ist es in React-Anwendungen üblich, für jede Komponente eigene Stylesheets zu definieren. In einer von Vite betriebenen Anwendung kann dies durch Erstellen einer CSS-Datei und deren Import in das entsprechende Komponentenmodul erfolgen.

Beispielsweise könnten wir eine eigene `Form.css`-Datei erstellen, um das CSS für die `<Form />`-Komponente zu speichern, und die Stile dann in `Form.jsx` importieren, folgendermaßen:

```jsx
import Form from "./Form";
import "./Form.css";
```

Dieser Ansatz erleichtert das Identifizieren und Verwalten des CSS, das zu einer bestimmten Komponente gehört, und unterscheidet sich von den anwendungsweiten Stilen. Allerdings fragmentiert er auch Ihr Stylesheet in Ihrem Code und diese Fragmentierung mag nicht immer lohnenswert sein. Für größere Anwendungen mit Hunderten von einzigartigen Ansichten und vielen beweglichen Teilen macht es Sinn, komponentenbasierte Stile zu verwenden und somit die Menge an irrelevanten Code zu begrenzen, der zu einem bestimmten Zeitpunkt an Ihre Benutzer gesendet wird.

Sie können mehr darüber und über andere Ansätze zur Gestaltung von React-Komponenten im Smashing Magazine-Artikel [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/) lesen.

## React DevTools

Wir haben `console.log()` verwendet, um den Zustand und die Props unserer Anwendung in diesem Tutorial zu überprüfen, und Sie haben auch einige der nützlichen Warnungen und Fehlermeldungen gesehen, die React sowohl in der CLI als auch in der JavaScript-Konsole Ihres Browsers ausgibt. Aber es gibt mehr, was wir hier tun können.

Das React DevTools-Utility ermöglicht es Ihnen, die internen Komponenten Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwicklertools Ihres Browsers ein neues Panel hinzu, mit dem Sie den Zustand und die Props verschiedener Komponenten inspizieren können, und sogar Zustand und Properties bearbeiten können, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieser Screenshot zeigt unsere fertige Anwendung, wie sie in React DevTools erscheint:

![Unser Projekt wird in React DevTools angezeigt](react-devtools.png)

Links sehen wir alle Komponenten, aus denen unsere Anwendung besteht, einschließlich eindeutiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Rechts sehen wir die Props und Hooks, die unsere App-Komponente verwendet. Beachten Sie auch, dass die `Form`, `FilterButton` und `Todo`-Komponenten nach rechts eingerückt sind – dies zeigt an, dass `App` ihr Elternteil ist. Diese Ansicht ist hervorragend geeignet, um Eltern-/Kind-Beziehungen auf einen Blick zu verstehen und ist unverzichtbar für das Verständnis komplexerer Apps.

React DevTools ist in mehreren Formen verfügbar:

- Eine [Chrome-Browsererweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox-Browsererweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge-Browsererweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [eigenständige Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Versuchen Sie, eine dieser Optionen zu installieren, und verwenden Sie sie dann, um die von Ihnen gerade gebaute App zu inspizieren!

Sie können [mehr über React DevTools in den React-Dokumenten lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()` Hook

In diesem Tutorial haben wir den `useState()`-Hook verwendet, um den Zustand über eine kleine Sammlung von Ereignis-Handler-Funktionen zu verwalten. Dies war zu Lernzwecken ausreichend, aber es ließ unsere Logik zur Zustandsverwaltung an die Event-Handler unserer Komponente gebunden – insbesondere an die des `<Todo />`-Komponenten.

Der `useReducer()`-Hook bietet Entwicklern eine Möglichkeit, unterschiedliche, aber verwandte Logiken zur Zustandsverwaltung in einer einzigen Funktion zu konsolidieren. Er ist etwas komplexer als `useState()`, aber ein gutes Werkzeug, das Sie in Ihrem Repertoire haben sollten. Sie können [mehr über `useReducer()` in den React-Dokumenten lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Context-API

Die Anwendung, die wir in diesem Tutorial gebaut haben, nutzte Komponenten-Props, um Daten von ihrer `App`-Komponente zu den Kindkomponenten zu übermitteln, die sie benötigten. Meistens sind Props eine geeignete Methode, um Daten zu teilen; für komplexe, tief verschachtelte Anwendungen sind sie jedoch nicht immer die beste Lösung.

React bietet die [Context-API](https://react.dev/learn/passing-data-deeply-with-context) als Möglichkeit, Daten an die Komponenten bereitzustellen, die sie benötigen, _ohne_ Props den Komponentenbaum hinunter zu übergeben. Es gibt auch einen [useContext-Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Wenn Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [einführenden Artikel über React-Kontext](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) geschrieben.

## Klassenkomponenten

Obwohl sie in diesem Tutorial nicht erwähnt werden, ist es möglich, React-Komponenten mithilfe von [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden als Klassenkomponenten bezeichnet. Bis zur Einführung der Hooks waren Klassen die einzige Möglichkeit, Zustand in Komponenten einzuführen oder Seiteneffekte zu verwalten. Sie sind immer noch die einzige Möglichkeit, bestimmte Randfälle zu handhaben, und sie sind in älteren React-Projekten häufig. Die offiziellen React-Dokumente führen eine Referenzklasse für die [`Component`](https://react.dev/reference/react/Component)-Basisklasse, empfehlen jedoch die Verwendung von Hooks zur Verwaltung von [Zustand](https://react.dev/learn/state-a-components-memory) und [Seiteneffekten](https://react.dev/learn/synchronizing-with-effects).

## Testen

Bibliotheken wie die [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ermöglichen das Schreiben von Unit-Tests für React-Komponenten. Es gibt viele Möglichkeiten, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) ist auf Vite aufgebaut und ist ein großartiger Begleiter für Ihre Vite-betriebenen React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routen

Obwohl das Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Benutzers durchgeführt wird, ist es möglich, eine Webanwendung so zu konfigurieren, dass sie den Standort des Browsers liest und aktualisiert und bestimmte Benutzeroberflächen rendert. Dies wird als _Client-Side Routing_ bezeichnet. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste Client-Side-Routing-Bibliothek für React. Sie ermöglicht es Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten diesen Routen zuzuordnen. Sie bietet auch eine Reihe nützlicher Hooks und Komponenten zur Verwaltung der Browser-Standorte und -Historie.

> [!NOTE]
> Client-side Routing kann Ihre Anwendung schnell erscheinen lassen, aber es bringt eine Reihe von Barrierefreiheitsproblemen mit sich, insbesondere für Menschen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing) lesen.

## Zusammenfassung

Das war's für JavaScript-Frameworks. Wir hoffen, dass Ihnen dieses Modul einen guten Überblick darüber gegeben hat, warum Frameworks existieren und wie man sie verwendet.

Im nächsten Modul werden wir uns auf [Web-Accessibility](/de/docs/Learn_web_development/Core/Accessibility) konzentrieren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
