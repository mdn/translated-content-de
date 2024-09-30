---
title: "Window: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{deprecated_header}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich gedacht war, Funktionen zum Hinzufügen externer Suchanbieter zum Browser zu enthalten. Diese Funktion ist jedoch nun veraltet, und die enthaltenen Methoden sind jetzt Dummy-Funktionen, die gemäß der Spezifikation nichts tun.

## Instanzmethoden

Das `External`-Objekt verfügt über die folgenden Methoden:

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
          >Autodiscovery von Such-Plugins</a
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
