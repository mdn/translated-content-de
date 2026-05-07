---
title: dark_theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme
l10n:
  sourceCommit: ee9431bdd896f41c2860ef340f01554c75fd7f29
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Optional</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"dark_theme": {
  "images": {
    "theme_frame": "images/moon.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `dark_theme`, um ein statisches Theme zu definieren, das angewendet wird, wenn Firefox das dunkle Farbschema verwendet. Der Schlüssel `dark_theme` nutzt die gleiche Syntax und unterstützt die gleichen Bild-, Farb- und Objekteigenschaften wie der Schlüssel `theme`.

Siehe den [`theme` key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}
