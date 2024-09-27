---
title: "Window: external Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{deprecated_header}}

Die `external` Eigenschaft der [`Window`](/de/docs/Web/API/Window) API gibt eine Instanz des `External` Interface zurück, die ursprünglich Funktionen zur Integration externer Suchanbieter in den Browser enthalten sollte. Diese Funktionalität ist jedoch veraltet, und die enthaltenen Methoden sind nun Dummy-Funktionen, die gemäß Spezifikation nichts tun.

## Instanzmethoden

Das `External` Objekt hat die folgenden Methoden:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Methode</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td>
        Dummy-Funktion; macht nichts. Siehe
        <a href="/de/docs/Web/OpenSearch#autodiscovery_of_search_plugins"
          >Autodetektierung von Such-Plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy-Funktion; macht nichts.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
