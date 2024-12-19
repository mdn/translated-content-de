---
title: Formulare und Schaltflächen in HTML
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte! Wir arbeiten hart daran, den Abschnitt MDN Lernen Webentwicklung zu verbessern, und werden die als unvollständig gekennzeichneten Bereiche ("TODO") bald abschließen.

HTML-Formulare und Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit Benutzern — sie werden am häufigsten zum Sammeln von Daten von Benutzern oder zur Steuerung einer Benutzeroberfläche verwendet. In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturelles HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen, zusammen mit Links, die wichtigsten Werkzeuge sind, damit Benutzer mit einer Webseite interagieren können.</li>
          <li>Die allgemeinen Arten von <code>&lt;button&gt;</code>: <code>button</code>, <code>submit</code> und <code>reset</code>.</li>
          <li>Gängige <code>&lt;input&gt;</code> Typen: <code>text</code>, <code>number</code>, <code>file</code>, <code>checkbox</code>, <code>radio</code>, <code>password</code> und <code>search</code>.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Formulare zugänglich machen — korrekte Semantik, das <code>&lt;label&gt;</code>-Element und das <code>for</code>-Attribut.</li>
          <li>Weitere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der Client-seitigen Validierung — <code>required</code>, <code>min</code>, <code>max</code>, <code>minlength</code>, <code>maxlength</code> und <code>pattern</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Es gibt viele Eingabetypen und Formularfunktionen, die hier nicht explizit erwähnt werden; der Zweck ist, eine gute allgemeine Einführung in Schaltflächen und Formularelemente zu geben und die häufigsten Fälle zu lernen. Die fortgeschrittenen/spezialisierten Fälle können nach Bedarf als Teil des ständigen Lernens eines Webentwicklers im Laufe seiner Karriere studiert werden.

## Schaltflächen

TODO

## Gängige Eingabetypen

TODO

## Zugängliche Formulare

- Zurückgehend auf das Argument für semantisches HTML (siehe auch 2.2 Gute Dokumentstruktur), sollten Sie verstehen, warum es wichtig ist, das richtige Element für die richtige Aufgabe zu verwenden. Zum Beispiel verwenden Sie ein `<button>`, um Ihr Formular zu übermitteln, und nicht ein `<div>`, das programmiert ist, sich wie ein `<button>` zu verhalten.
- Verstehen Sie die von Haus aus in `<button>`s und Formularelementen von Browsern programmierten Funktionen und wie wichtig sie sind. Beispiele sind Tastaturzugänglichkeit, Fokusumrisse und semantische Bedeutung für AT zur Identifizierung der Elemente und zur Kommunikation ihrer Bedeutung.

## Andere Steuerungstypen

TODO

## Client-seitige Formularvalidierung

Client-seitige Formularvalidierung ist wirklich eine Verbesserung der Benutzerfreundlichkeit, die zusammen mit der serverseitigen Formularvalidierung verwendet werden sollte. Sie ist kein Ersatz dafür.

## Das `<form>`-Element

TODO

## Testen Sie Ihre Fähigkeiten!

TODO

## Zusammenfassung

Das war's für den Moment. Wir haben Bilder und Bildunterschriften ausführlich behandelt. Im nächsten Artikel gehen wir einen Schritt weiter und betrachten, wie man HTML verwendet, um Video- und Audiodateien in Webseiten einzubetten.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
