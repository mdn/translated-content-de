---
title: Vue-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Vue_resources
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Vue-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Nun wollen wir unser Studium von Vue abschließen, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen weiterzuführen, sowie einige andere nützliche Tipps.

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
            >Terminal-/Befehlszeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als eine Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren, wo man weitere Informationen zu Vue finden kann, um das Lernen fortzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

Hier sollten Sie hin, um mehr über Vue zu lernen:

- [Vue-Dokumentation](https://vuejs.org/) — Die Hauptseite von Vue. Beinhaltet umfassende Dokumentation, einschließlich Beispielen, Kochbüchern und Referenzmaterial. Dies ist der beste Ort, um Vue vertieft zu lernen.
- [Vue GitHub-Repository](https://github.com/vuejs/vue) — Der eigentliche Vue-Code. Hier können Sie Probleme melden und/oder direkt zum Vue-Code beitragen. Das Studium des Vue-Quellcodes kann Ihnen helfen, das Framework besser zu verstehen und besseren Code zu schreiben.
- [Vue-Diskussionen](https://github.com/vuejs/core/discussions) — Das offizielle Forum, um Hilfe mit Vue zu erhalten.
- [Vue CLI-Dokumentation](https://cli.vuejs.org/) — Dokumentation für das Vue CLI. Diese enthält Informationen zum Anpassen und Erweitern der von Ihnen über das CLI erzeugten Ausgabe.
- [Nuxt](https://nuxt.com/) — Nuxt ist ein serverseitiges Vue-Framework, mit einigen architektonischen Überzeugungen, die nützlich sein können, um wartbare Anwendungen zu erstellen, selbst wenn Sie keine der serverseitigen Rendering-Funktionen nutzen, die es bietet. Diese Seite bietet detaillierte Dokumentation zur Nutzung von Nuxt.
- [Vue Mastery](https://www.vuemastery.com/courses/) — Eine kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat, einschließlich einiger kostenloser Lektionen.
- [Vue School](https://vueschool.io/) — Eine weitere kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat.

## Erstellen und Veröffentlichen Ihrer Vue-App

Das Vue CLI bietet uns auch Werkzeuge, um unsere App für die Veröffentlichung im Web vorzubereiten. Sie können dies folgendermaßen tun:

- Wenn Ihr lokaler Server noch läuft, beenden Sie ihn, indem Sie im Terminal <kbd>Strg</kbd> \+ <kbd>C</kbd> drücken.

- Führen Sie anschließend `npm run build` (oder `yarn build`) in der Konsole aus.

Dadurch wird ein neues `dist`-Verzeichnis erstellt, das alle Ihre produktionsbereiten Dateien enthält. Um Ihre Website im Web zu veröffentlichen, kopieren Sie den Inhalt dieses Ordners in Ihre Hosting-Umgebung.

> [!NOTE]
> Die Vue CLI-Dokumentation enthält auch einen [spezifischen Leitfaden zum Veröffentlichen Ihrer App](https://cli.vuejs.org/guide/deployment.html#platform-guides) auf vielen der gängigen Hosting-Plattformen.

## Vue 2

Der Support für Vue 2 endet am 31. Dezember 2023 und die Standard-Vue-Version für alle CLI-Tools wird Version 3 und höher sein.
Die [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) funktioniert als Alternative zur eigenschaftsbasierten API, bei der eine `setup()`-Funktion auf der Komponente verwendet wird. Nur was Sie von dieser Funktion zurückgeben, ist in Ihren `<template>`s verfügbar. Sie müssen explizit über "reaktive" Eigenschaften sein, wenn Sie diese API verwenden. Vue übernimmt dies für Sie unter Verwendung der [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). Dies macht die neue API typischerweise als fortgeschrittenen Anwendungsfall betrachtet.

Wenn Sie von Vue 2 upgraden, wird empfohlen, dass Sie einen Blick auf den [Vue 3 Migrationsleitfaden](https://v3-migration.vuejs.org/) werfen.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
