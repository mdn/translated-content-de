---
title: Vue-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Vue_resources
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

Nun werden wir unser Studium von Vue abschließen, indem wir Ihnen eine Liste von Ressourcen zur Verfügung stellen, die Sie für Ihr weiteres Lernen nutzen können, sowie einige andere nützliche Tipps.

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
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als eine Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wo Sie weitere Informationen zu Vue finden können, um Ihr Lernen fortzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

Hier sollten Sie hingehen, um mehr über Vue zu lernen:

- [Vue Docs](https://vuejs.org/) — Die Hauptseite von Vue. Enthält umfassende Dokumentation, einschließlich Beispielen, Kochbüchern und Referenzmaterial. Dies ist der beste Ort, um Vue gründlich zu lernen.
- [Vue GitHub Repo](https://github.com/vuejs/vue) — Der Vue-Code selbst. Hier können Sie Probleme melden und/oder direkt zum Vue-Code beitragen. Das Studium des Vue-Quellcodes kann Ihnen helfen, das Framework besser zu verstehen und besseren Code zu schreiben.
- [Vue Discussions](https://github.com/vuejs/core/discussions) — Das offizielle Forum, um Hilfe mit Vue zu erhalten.
- [Vue CLI Docs](https://cli.vuejs.org/) — Dokumentation für das Vue CLI. Diese enthält Informationen zum Anpassen und Erweitern der Ausgabe, die Sie über das CLI generieren.
- [Nuxt](https://nuxt.com/) — Nuxt ist ein serverseitiges Vue-Framework mit einigen architektonischen Meinungen, die nützlich sein können, um wartbare Anwendungen zu erstellen, selbst wenn Sie keine der von ihm bereitgestellten Server Side Rendering-Funktionen nutzen. Diese Seite bietet detaillierte Dokumentation zur Verwendung von Nuxt.
- [Vue Mastery](https://www.vuemastery.com/courses/) — Eine kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat, einschließlich einiger kostenloser Lektionen.
- [Vue School](https://vueschool.io/) — Eine weitere kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat.

## Erstellen und Veröffentlichen Ihrer Vue-App

Das Vue CLI bietet uns auch Werkzeuge zur Vorbereitung unserer App für die Veröffentlichung im Web. Sie können dies folgendermaßen tun:

- Wenn Ihr lokaler Server noch läuft, beenden Sie ihn, indem Sie <kbd>Strg</kbd> \+ <kbd>C</kbd> im Terminal drücken.

- Führen Sie anschließend `npm run build` (oder `yarn build`) in der Konsole aus.

Dies wird ein neues `dist`-Verzeichnis erstellen, das alle Ihre produktionsbereiten Dateien enthält. Um Ihre Website im Web zu veröffentlichen, kopieren Sie den Inhalt dieses Ordners in Ihre Hosting-Umgebung.

> [!NOTE]
> Die Vue CLI-Dokumentation enthält auch einen [spezifischen Leitfaden zum Veröffentlichen Ihrer App](https://cli.vuejs.org/guide/deployment.html#platform-guides) auf vielen der gängigen Hosting-Plattformen.

## Vue 2

Der Support für Vue 2 endet am 31. Dezember 2023, und die Standardversion von Vue für alle CLI-Tools wird Version 3 und höher sein. Die [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) funktioniert als Alternative zur eigenschaftsbasierten API, bei der eine `setup()`-Funktion in der Komponente verwendet wird. Nur was Sie aus dieser Funktion zurückgeben, ist in Ihren `<template>`s verfügbar. Sie müssen explizit "reaktive" Eigenschaften bei der Verwendung dieser API angeben. Vue übernimmt dies für Sie mit der [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). Dies macht die neue API typischerweise als fortgeschritteneren Anwendungsfall angesehen.

Wenn Sie von Vue 2 upgraden, wird empfohlen, dass Sie sich den [Vue 3 Migrations-Leitfaden](https://v3-migration.vuejs.org/) ansehen.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
