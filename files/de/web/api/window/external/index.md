---
title: "Window: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: 7f20e0450f4f3985ac790a008d3c899a449ef80f
---

{{APIRef}} {{deprecated_header}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich Funktionen für das Hinzufügen externer Suchanbieter zum Browser enthalten sollte. Diese ist jedoch mittlerweile veraltet, und die enthaltenen Methoden sind laut Spezifikation nur noch Dummy-Funktionen, die nichts bewirken.

## Instanzmethoden

Das `External`-Objekt enthält die folgenden Methoden:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Methode</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(descriptionURL)</code>
      </td>
      <td>
        Dummy-Funktion; bewirkt nichts. Siehe
        <a href="/de/docs/Web/XML/Guides/OpenSearch#autodiscovery_of_search_plugins"
          >Autodiscovery von Such-Plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy-Funktion; bewirkt nichts.</td>
    </tr>
    <tr>
      <td><code>getHostEnvironmentValue(name)</code> {{non-standard_inline}}</td>
      <td>Proprietäre API von Microsoft Edge. Weitere Informationen finden Sie in den <a href="https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/mt795399(v=vs.85)">Microsoft-Dokumenten</a>.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
