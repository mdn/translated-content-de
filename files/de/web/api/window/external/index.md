---
title: "Fenster: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}} {{deprecated_header}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich dazu gedacht war, Funktionen zum Hinzufügen externer Suchanbieter zum Browser zu enthalten. Diese ist jedoch jetzt veraltet, und die darin enthaltenen Methoden sind jetzt Dummy-Funktionen, die gemäß der Spezifikation nichts tun.

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
        <code>AddSearchProvider(descriptionURL)</code>
      </td>
      <td>
        Dummy-Funktion; tut nichts. Wurde verwendet, um <a href="/de/docs/Web/XML/Guides/OpenSearch">Suchbeschreibungen zu registrieren</a>.
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
