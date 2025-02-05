---
title: "Window: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef}} {{deprecated_header}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich Funktionen im Zusammenhang mit dem Hinzufügen externer Suchanbieter zum Browser enthalten sollte. Diese Eigenschaft ist jedoch veraltet, und die enthaltenen Methoden sind gemäß der Spezifikation nun Dummy-Funktionen, die nichts ausführen.

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
        Dummy-Funktion; führt nichts aus. Siehe
        <a href="/de/docs/Web/XML/Guides/OpenSearch#autodiscovery_of_search_plugins"
          >Automatische Erkennung von Such-Plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy-Funktion; führt nichts aus.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
