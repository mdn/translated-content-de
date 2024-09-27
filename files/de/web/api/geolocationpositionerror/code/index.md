---
title: "GeolocationPositionError: code-Eigenschaft"
short-title: code
slug: Web/API/GeolocationPositionError/code
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte **`code`**-Eigenschaft des [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Interfaces ist ein `unsigned short`, das den Fehlercode darstellt.

Die folgenden Werte sind möglich:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Wert</th>
      <th scope="col">Zugehörige Konstante</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1</code></td>
      <td><code>PERMISSION_DENIED</code></td>
      <td>
        Die Erfassung der Geolokalisierungsinformationen schlug fehl, da die Seite
        keine Berechtigung dazu hatte.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>POSITION_UNAVAILABLE</code></td>
      <td>
        Die Erfassung der Geolokalisierung schlug fehl, weil eine oder mehrere interne Quellen der Position einen internen Fehler zurückgaben.
      </td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>TIMEOUT</code></td>
      <td>Die Geolokalisierungsinformationen wurden nicht innerhalb der erlaubten Zeit erhalten.</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolokalisierung](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
