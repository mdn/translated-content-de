---
title: "Fenster: externe Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window) API gibt eine Instanz der `External`-Schnittstelle zurück, die dazu gedacht war, Funktionen im Zusammenhang mit dem Hinzufügen externer Suchanbieter zum Browser zu enthalten. Dies ist jedoch jetzt veraltet, und die enthaltenen Methoden sind nun Dummy-Funktionen, die gemäß Spezifikation nichts tun.

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
        Dummy-Funktion; macht nichts. Wurde verwendet, um <a href="/de/docs/Web/XML/Guides/OpenSearch">Suchbeschreibungen zu registrieren</a>.
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
