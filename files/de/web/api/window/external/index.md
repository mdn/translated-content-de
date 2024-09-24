---
title: "Fenster: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{deprecated_header}}

Die `external`-Eigenschaft der {{domxref("Window")}}-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich Funktionen zum Hinzufügen externer Suchanbieter zum Browser enthalten sollte. Dies ist jedoch jetzt veraltet, und die enthaltenen Methoden sind gemäß Spezifikation nun Dummy-Funktionen, die nichts tun.

## Instanzmethoden

Das `External`-Objekt hat die folgenden Methoden:

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
        Dummy-Funktion; tut nichts. Siehe
        <a href="/de/docs/Web/OpenSearch#autodiscovery_of_search_plugins"
          >Autodiscovery of search plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy-Funktion; tut nichts.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
