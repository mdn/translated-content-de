---
title: "Window: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{APIRef}} {{deprecated_header}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich dazu gedacht war, Funktionen zur Hinzufügung externer Suchanbieter zum Browser zu enthalten. Diese ist jedoch jetzt veraltet, und die enthaltenen Methoden sind laut Spezifikation nun Dummy-Funktionen, die nichts tun.

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
        <code>AddSearchProvider(descriptionURL)</code>
      </td>
      <td>
        Dummy-Funktion; macht nichts. Verwendet zur <a href="/de/docs/Web/XML/Guides/OpenSearch">Registrierung von Suchbeschreibungen</a>.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy-Funktion; macht nichts.</td>
    </tr>
    <tr>
      <td><code>getHostEnvironmentValue(name)</code> {{non-standard_inline}}</td>
      <td>Microsoft Edge-proprietäre API. Siehe <a href="https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/mt795399(v=vs.85)">Microsoft-Dokumentation</a> für weitere Informationen.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
