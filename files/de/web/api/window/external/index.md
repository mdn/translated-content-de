---
title: "Window: external-Eigenschaft"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: 8c4ef12832f3fae1ce42268b78aa0ee450e5f236
---

{{APIRef}} {{deprecated_header}}

Die `external`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-API gibt eine Instanz der `External`-Schnittstelle zurück, die ursprünglich Funktionen zur Integration von externen Suchanbietern in den Browser enthalten sollte. Diese Nutzung ist jedoch veraltet, und die enthaltenen Methoden sind nun Dummy-Funktionen, die laut Spezifikation nichts bewirken.

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
        Dummy-Funktion; bewirkt nichts. Wurde verwendet, um <a href="/de/docs/Web/XML/Guides/OpenSearch">Suchbeschreibungen zu registrieren</a>.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Dummy-Funktion; bewirkt nichts.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
