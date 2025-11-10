---
title: Vue-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Vue_resources
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

Nun werden wir unser Studium von Vue mit einer Liste von Ressourcen abrunden, die Sie nutzen können, um Ihr Lernen zu vertiefen, zusätzlich zu einigen anderen nützlichen Tipps.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer auf HTML basierenden Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und zur Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erfahren, wo Sie weitere Informationen zu Vue finden können, um Ihr Lernen fortzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

Hier sollten Sie hingehen, um mehr über Vue zu lernen:

- [Vue Docs](https://vuejs.org/) — Die Hauptseite von Vue. Enthält umfassende Dokumentationen, einschließlich Beispielen, Kochbüchern und Referenzmaterial. Dies ist der beste Ort, um Vue in der Tiefe zu lernen.
- [Vue GitHub Repo](https://github.com/vuejs/vue) — Der Vue-Code selbst. Hier können Sie Probleme melden und/oder direkt zum Vue-Code beitragen. Das Studium des Vue-Quellcodes kann Ihnen helfen, das Framework besser zu verstehen und besseren Code zu schreiben.
- [Vue Discussions](https://github.com/vuejs/core/discussions) — Das offizielle Forum, um Hilfe zu Vue zu erhalten.
- [Vue CLI Docs](https://cli.vuejs.org/) — Dokumentation für die Vue CLI. Dies enthält Informationen zur Anpassung und Erweiterung der Ausgaben, die Sie über die CLI generieren.
- [Nuxt](https://nuxt.com/) — Nuxt ist ein Server-Side Vue Framework mit einigen architektonischen Überzeugungen, die nützlich sein können, um wartbare Anwendungen zu erstellen, selbst wenn Sie keine der bereitgestellten Server-Side-Rendering-Funktionen verwenden. Diese Seite bietet ausführliche Dokumentation zur Verwendung von Nuxt.
- [Vue Mastery](https://www.vuemastery.com/courses/) — Eine kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat, einschließlich einiger kostenloser Lektionen.
- [Vue School](https://vueschool.io/) — Eine weitere kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat.

## Ihr Vue-App aufbauen und veröffentlichen

Die Vue CLI bietet uns auch Werkzeuge, um unsere App für die Veröffentlichung im Web vorzubereiten. Sie können dies folgendermaßen tun:

- Wenn Ihr lokaler Server noch läuft, beenden Sie ihn, indem Sie <kbd>Strg</kbd> \+ <kbd>C</kbd> im Terminal drücken.

- Führen Sie anschließend im Terminal `npm run build` (oder `yarn build`) aus.

Dadurch wird ein neues `dist`-Verzeichnis erstellt, das alle produktionsbereiten Dateien enthält. Um Ihre Website im Web zu veröffentlichen, kopieren Sie den Inhalt dieses Ordners in Ihre Hosting-Umgebung.

> [!NOTE]
> Die Vue CLI-Dokumentation enthält auch einen [spezifischen Leitfaden zur Veröffentlichung Ihrer App](https://cli.vuejs.org/guide/deployment.html#platform-guides) auf vielen der gängigen Hosting-Plattformen.

## Vue 2

Die Unterstützung für Vue 2 endet am 31. Dezember 2023 und die Standard-Vue-Version für alle CLI-Tools wird Version 3 und höher sein.
Die [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) funktioniert als Alternative zur auf Eigenschaften basierenden API, bei der eine `setup()`-Funktion auf der Komponente verwendet wird. Nur was Sie von dieser Funktion zurückgeben, ist in Ihren `<template>`s verfügbar. Es ist notwendig, explizit über "reaktive" Eigenschaften zu sein, wenn Sie diese API verwenden. Vue erledigt dies für Sie mit der [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). Dies macht die neue API in der Regel als fortgeschrittener Anwendungsfall betrachtet.

Wenn Sie von Vue 2 aufrüsten, wird empfohlen, einen Blick auf den [Vue 3 Migrationsleitfaden](https://v3-migration.vuejs.org/) zu werfen.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
